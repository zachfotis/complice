import { getPathsToRevalidate } from '@/utils/paths';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

interface RevalidateURLParams {
  params: {
    section?: string;
  };
}

export async function GET(req: NextRequest, { params }: RevalidateURLParams) {
  if (!params?.section) {
    return new Response('Not found', { status: 404 });
  }

  const paths = getPathsToRevalidate(params.section);

  if (!paths?.length) {
    return new Response('Not found', { status: 404 });
  }

  paths.forEach((path) => {
    revalidatePath(path);
    const date = new Date();
    console.log(`PATH REVALIDATED: ${path} @ ${date.toISOString()}`);
  });

  return Response.json({ status: 'OK' });
}
