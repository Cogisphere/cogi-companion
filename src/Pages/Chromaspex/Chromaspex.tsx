import { useTranslation } from "react-i18next";
import { Data, Palette } from "@cogisphere/cogi-colors";
import { PaintLineListing } from "./PaintLineListing";
import { PaletteEditor } from "../../Widgets";
import { useState } from "react";

/**
 *  This is a component that allows use to create and manage color paletts.
 */
export function Chromaspex() {
    
    const { t } = useTranslation();
    const [ palette, setPalette ] = useState<Palette>(new Palette("temp"));

    const paintLines = Data.instance.paintLines;

    return (
        <>
            <h1>{t("chromaspex.title")}</h1>
            {paintLines.map(line => <PaintLineListing key={line.lineCode} paintLine={line}/>)}
            <PaletteEditor palette={palette}/>
        </>
    );
};