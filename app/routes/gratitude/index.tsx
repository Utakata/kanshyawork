import React from 'react';
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
import { getGratitudeEntries } from '~/models/gratitude.server';

type LoaderData = {
  gratitudeEntries: Array<{
    id: string;
    content: string;
    createdAt: string;
    userId: string;
  }>;
};

export const loader: LoaderFunction = async () => {
  const gratitudeEntries = await getGratitudeEntries();
  return json<LoaderData>({ gratitudeEntries });
};

export default function GratitudeIndex() {
  const { gratitudeEntries } = useLoaderData<LoaderData>();

  return (
    <div className="container mx-auto px-4 py-8">
      