import React, { useState, useEffect } from 'react';
import { useLoaderData, useActionData, Form } from '@remix-run/react';
import { json, redirect } from '@remix-run/node';
import type { LoaderFunction, ActionFunction } from '@remix-run/node';
import { getUserProfile, updateUserProfile } from '~/models/user';
import { requireUserId } from '~/session.server';

type LoaderData = {
  name: string;
  email: string;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const profile = await getUserProfile(userId);
  if (!profile) {
    throw new Response('Not Found', { status: 404 });
  }
  return json<LoaderData>(profile);
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const formData = await request.form