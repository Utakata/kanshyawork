import React from 'react';
import { useParams, useLoaderData } from '@remix-run/react';
import { json, LoaderFunction } from '@remix-run/node';
import { getGratitudePost } from '~/models/gratitude.server';

type LoaderData = {
  gratitudePost: {
    id: string;
    content: string;
    createdAt: string;
    author: string;
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  const gratitudeId = params.id;
  if (!gratitudeId) {
    throw new Response('Not Found', { status: 404 });
  }

  const gratitudePost = await getGratitudePost(gratitudeId);
  if (!gratitudePost) {
    throw new Response('Not Found', { status: 404 });
  }

  return json<LoaderData>({ gratitudePost });
};

export default