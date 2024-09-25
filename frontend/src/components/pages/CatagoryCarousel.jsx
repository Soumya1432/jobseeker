import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Button } from '../ui/button';

const category=[
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
    "Software Engineer",
    "UI/UX Designer"
]

const CatagoryCarousel = () => {
  return (
    <div className=''>
      <Carousel className="w-full max-w-xl mx-auto my-10">
          <CarouselContent>
            {
              category.map((cat)=>(
                <CarouselItem className="md:basis-1/2 lg:basis-1/3" >
                    <Button className="rounded-full bg-slate-600 text-white" variant="outline" >{cat}</Button>
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default CatagoryCarousel;
