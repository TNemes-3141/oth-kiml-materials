"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import { semesterMaterials, LectureMaterial } from "@/data/materials";

import LectureMaterialList from "./LectureMaterialList";

export default function MaterialSelector() {
    return (
        <div className="flex w-full flex-col">
            <Select
                label="Wähle einen Kurs"
                placeholder="..."
                defaultSelectedKeys={["0"]}
            >
                {semesterMaterials.map((semester) => (
                    <SelectItem key={semester.id}>
                        {semester.name}
                    </SelectItem>
                ))}
            </Select>
            
        </div>
    );
}

/*<Accordion>
                {
                    semesterMaterials.map((semesterMaterial, i) => {
                        const name: string = semesterMaterial.name;
                        const materials: LectureMaterial[] = semesterMaterial.materials;
                        return (
                            <AccordionItem key={i} aria-label={name} title={name}>
                                <LectureMaterialList materials={materials} />
                            </AccordionItem>
                        )
                    })
                }
            </Accordion> */