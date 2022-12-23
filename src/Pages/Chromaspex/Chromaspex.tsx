import { useTranslation } from "react-i18next";
import { Data } from "@cogisphere/cogi-colors";
import { PaintLineListing } from "./PaintLineListing";

/**
 *  This is a component that allows use to create and manage color paletts.
 */
export function Chromaspex() {
    
    const { t } = useTranslation();

    const paintLines = Data.instance.paintLines;

    return (
        <>
            <h1>{t("chromaspex.title")}</h1>
            {paintLines.map(line => <PaintLineListing key={line.lineCode} paintLine={line}/>)}
        </>        
    );
};