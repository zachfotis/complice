import { getPathsToRevalidate } from '@/utils/paths';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

interface RevalidateURLParams {
  params: {
    section?: string;
  };
}

export async function GET(req: NextRequest, { params }: RevalidateURLParams) {
  if (!params?.section) {
    return NextResponse.json({ status: 'error', message: 'Invalid section' }, { status: 400 });
  }

  const paths = getPathsToRevalidate(params.section);

  if (!paths?.length) {
    return NextResponse.json({ status: 'error', message: 'No paths to revalidate' }, { status: 400 });
  }

  const date = new Date();
  if (paths.length === 1 && paths[0] === '/') {
    revalidatePath('/', 'layout');
    console.log(`LAYOUT REVALIDATED @ ${date.toISOString()}`);
  } else {
    paths.forEach((path) => {
      revalidatePath(path);
      console.log(`PATH REVALIDATED: ${path} @ ${date.toISOString()}`);
    });
  }

  return NextResponse.json({ status: 'OK' });
}
