import { NextResponse } from 'next/server'
import DATA from '@/assets/dummy/products.json'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')
  if (type) {
    const filteredProductData = DATA.filter((item) => item.type === type)
    return NextResponse.json(filteredProductData)
  } else {
    return NextResponse.json(DATA)
  }
}

