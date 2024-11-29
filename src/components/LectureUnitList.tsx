import { semesterMaterials, LectureMaterial } from "@/data/materials"
import { Accordion, AccordionItem } from "@nextui-org/react";
import LectureMaterialList from "./LectureMaterialList";


type LectureUnitListProps = {
    semesterIndex: number
}

export default function LectureUnitList({ semesterIndex }: LectureUnitListProps) {
    const unitList = semesterIndex >= 0 && semesterIndex < semesterMaterials.length
        ? semesterMaterials[semesterIndex].units
        : [];

    return (
        <Accordion>
            {
                    unitList.map((unit, i) => {
                        const name: string = `Einheit ${unit.number}`.toUpperCase();
                        const materials: LectureMaterial[] = unit.materials;
                        return (
                            <AccordionItem key={i} aria-label={name} title={name}>
                                <LectureMaterialList materials={materials} />
                            </AccordionItem>
                        )
                    })
                }
        </Accordion>
    );
}