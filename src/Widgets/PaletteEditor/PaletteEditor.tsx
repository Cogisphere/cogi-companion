import { Data, Palette } from "@cogisphere/cogi-colors";
import { PaintCard } from "@cogisphere/cogi-uikit";
import { useState } from "react";
import { EditorControls } from "./EditorControls";

export interface PaletteEditorProps {

    /**
     *  The palette the editor should handle.
     */
    palette: Palette;
};

/**
 *  This is a widget that allows user to edit a palette. I allows for showing
 *  a number of colors in the palette, removing them, and getting a color by
 *  random.
 */
export function PaletteEditor({ palette }: PaletteEditorProps) {

    // This is a nasty hack as there is no way to track palette's changes. This,
    // of course, has to change by implementing a proper way to listen to changes
    // on a palette's level.
    // @todo better solution is needed
    const [ c, setC ] = useState(0);

    const handleNameChange = (newName: string) => {
        palette.rename(newName);
        setC(c+1);
    };

    const handleRandom = () => {

        const paint = Data.instance.pickPaintAtRandom(palette.paints);
        if (paint) palette.insert(paint);
        setC(c+1);
    };

    return(
        <div>
            {palette.paints.map(p => (<PaintCard paint={p}/>))}
            <EditorControls name={palette.name} onNameChange={handleNameChange} onRandom={handleRandom}/>
        </div>
    );
};