import Image from "next/image";
import { Card, CardContent } from "../components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel"

const carouselDemo = () => {
    return (
        <Carousel
        opts={{
            align:"start",
            loop:true
        }}
        className="w-full max-w-xs  mx-auto">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className=" basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className=' relative flex aspect-square item-center justify-center p-6'>
                                    <span className="text-4xl font-semibold">{index+1}</span>
                                    <Image src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?_gl=1*1x7k9yv*_ga*MTMzMTk2NjU2NC4xNzU5MjkzNzk2*_ga_8JE65Q40S6*czE3NTkyOTM3OTYkbzEkZzEkdDE3NTkyOTM4NTEkajUkbDAkaDA." alt ="Testing" fill/>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
export default carouselDemo;