"use client";

import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import testOne from "@/image/image (1).png";
import testTwo from "@/image/image (1).png";
import testThree from "@/image/image.png";
import testFour from "@/image/image (2).png";
import testFive from "@/image/image (3).png";
import testSix from "@/image/image (2).png";
import testSeven from "@/image/image.png";
import testEight from "@/image/image (3).png";
import testTen from "@/image/image (2).png";
import testNine from "@/image/image (1).png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Elizabeth Joe",
    title: "Founder of ADRF",
    image: testFive.src,
  },
  {
    name: "Esther Howard",
    title: "Web Designer",
    image: testEight.src,
  },
  {
    name: "Albert Flores",
    title: "President of Sales",
    image: testSeven.src,
  },
  {
    name: "Sarah Thompson",
    title: "Marketing Director",
    image: testFour.src,
  },
  {
    name: "Michael Chen",
    title: "Software Engineer",
    image: testSix.src,
  },
  {
    name: "Emily Rodriguez",
    title: "Project Manager",
    image: testOne.src,
  },
  {
    name: "David Kim",
    title: "Financial Analyst",
    image: testTwo.src,
  },
  {
    name: "Rachel Patel",
    title: "HR Specialist",
    image: testThree.src,
  },
  {
    name: "Thomas Nguyen",
    title: "Operations Manager",
    image: testNine.src,
  },
  {
    name: "Olivia Williams",
    title: "Customer Success Manager",
    image: testTen.src,
  },
];

export function CarouselSize() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (direction === "right") {
        scrollNext();
      } else {
        scrollPrev();
      }
      if (selectedIndex % 3 === 0) {
        setDirection((prev) => (prev === "right" ? "left" : "right"));
      }
    }, 5000); 

    return () => clearInterval(autoplayInterval);
  }, [scrollNext, scrollPrev, direction, selectedIndex]);

  return (
    <Carousel
      ref={emblaRef}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-5 w-[380px] ">
              <Card className="bg-white shadow-lg ">
                <CardContent className="flex flex-col items-start p-6">
                  <div className="mb-4 h-12 w-12 bg-orange-500 rounded-full">
                    <svg
                      viewBox="0 0 24 24"
                      fill="#f7f8fa"
                      className="w-8 h-8 pl-4 pt-3"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-4">
                    This is the best agency for non profit activities. I love
                    their work so much. I wish one day they would remove all the
                    poverty from the world. I will be there when they need.
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
