import { NextResponse } from 'next/server'
import DATA from '@/assets/dummy/categories.json'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const categoryType = searchParams.get('categoryType')

  if (categoryType) {
    const filteredCategoryThumbData = DATA.filter((item) => item.categoryType === categoryType)
    return NextResponse.json(filteredCategoryThumbData)
  } else {
    return NextResponse.json(DATA)
  }
}
