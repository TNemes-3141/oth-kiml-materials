import { AnnotatedLink } from "@/data/materials";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import ButtonLinkList from "./ButtonLinkList";

type LectureMaterialCardProps = {
    title: string,
    links: AnnotatedLink[],
}

export default function LectureMaterialCard({ title, links }: LectureMaterialCardProps) {
    return (
        <Card className="p-2 min-w-[40%]" shadow="sm">
            <CardHeader className="flex flex-col items-center text-center">
                <p className="font-bold">{title}</p>
            </CardHeader>
            <CardBody className="gap-4">
                {
                    links.map((link, index) => {
                        return (
                            <ButtonLinkList
                                key={index}
                                title={link.title}
                                uri={link.uri}
                            />
                        );
                    })
                }
            </CardBody>
        </Card>
    );
}