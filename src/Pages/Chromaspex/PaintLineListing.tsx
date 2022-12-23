import { PaintLine } from "@cogisphere/cogi-colors";
import { GridListing, PaintCard } from "@cogisphere/cogi-uikit";

export function PaintLineListing({ paintLine }: { paintLine: PaintLine}) {
    return (
        <div>
            <h2>{paintLine.name}</h2>
            <GridListing>
                {paintLine.getOrderedByCoolness().map(paint => <PaintCard key={paint.paintCode} paint={paint}/>)}
            </GridListing> 
        </div> 
    );
};