import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

export interface EditorControlsProps {

    /**
     *  Name of the palette.
     */
    name: string;

    /**
     *  A callback that is called when user wants to change the name
     *  of the palette to a new one.
     */
    onNameChange: (newName: string) => void;

    /**
     *  A callback that is called when user wants to add a random color
     *  to the palette.
     */
    onRandom: () => void;
};

/**
 *  This is a widget that presents controls for editing a color palette.
 */
export function EditorControls({name, onNameChange, onRandom } : EditorControlsProps) {

    const { t } = useTranslation();

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        onNameChange(e.target.value);
    };

    return (
        <div>
            <input type="text" defaultValue={name} onInput={handleNameChange}/>
            <button onClick={onRandom}>{t("widgets.paletteeditor.contols.randomcolor")}</button>
        </div>
    );
};