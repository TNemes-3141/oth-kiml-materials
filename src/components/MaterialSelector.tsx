"use client";

import { useState } from "react";
import {Select, SelectItem} from "@nextui-org/select";
import { semesterMaterials } from "@/data/materials";
import LectureUnitList from "./LectureUnitList";


export default function MaterialSelector() {
    const [semesterIndex, setSemesterIndex] = useState<number>(0);

    const onSemesterChange = (e: any) => {
        const numericId = Number(e.target.value);
        setSemesterIndex(semesterMaterials.findIndex(s => s.id === numericId));
    }

    return (
        <div className="flex w-full flex-col gap-10">
            <Select
                label="Wähle einen Kurs"
                placeholder="..."
                defaultSelectedKeys={["0"]}
                onChange={onSemesterChange}
            >
                {semesterMaterials.map((semester) => (
                    <SelectItem key={semester.id}>
                        {semester.name}
                    </SelectItem>
                ))}
            </Select>
            
            <LectureUnitList semesterIndex={semesterIndex}/>
        </div>
    );
}