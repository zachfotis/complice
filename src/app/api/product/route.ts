import { NextResponse } from 'next/server'
import DATA from '@/assets/dummy/products.json'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const productId = searchParams.get('productId')
  const product = DATA.find((item) => item.id === productId)

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }
  return NextResponse.json(product)
}

