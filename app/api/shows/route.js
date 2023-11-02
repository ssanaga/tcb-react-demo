import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';

export const GET = withApiAuthRequired(async function shows(req) {
  try {
    const res = new NextResponse();
    const { accessToken } = await getAccessToken(req, res, {
      scopes: ['read:products']
    });

    console.log("Access token", accessToken);
    const apiPort = process.env.API_PORT || 3001;
    const apiURL = process.env.API_URL;

    console.log("API URL", `${apiURL}`);
    const response = await fetch('https://fsfyi0kvmc.execute-api.us-east-1.amazonaws.com/TCBListProducts', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const shows = await response.json();

    console.log("Shows" + `${shows}`);

    return NextResponse.json(shows, res);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 });
  }
});
