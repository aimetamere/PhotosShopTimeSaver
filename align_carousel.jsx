#target photoshop

var frameWidth = 1080;
var frameHeight = 1350;

var srcDoc = app.activeDocument;
var srcLayer = srcDoc.activeLayer;

// Full layer bounds pour image original array
var layerBounds = srcLayer.bounds;
var layerLeft = layerBounds[0].as("px");
var layerTop = layerBounds[1].as("px");
var layerRight = layerBounds[2].as("px");
var layerBottom = layerBounds[3].as("px");

//  assumes have a selection or layer that represents first frame
var firstFrameLeft = layerLeft; // Start of manual frame
var firstFrameTop = layerTop;   // Top of manual frame
var firstFrameRight = firstFrameLeft + frameWidth;  // End of manual frame
var firstFrameBottom = firstFrameTop + frameHeight; // Bottom of manual frame

// Calculate the hidden part (dehors la frame)
var sliceHidden = firstFrameRight;        // Start right after frame y axis
var sliceTop = firstFrameTop;           // Same vertical position as frame y axis 
var sliceSeen = Math.min(layerRight, sliceHidden + frameWidth);  // Limit to frame width x axis make sure horizontal is aligned
var sliceBottom = firstFrameBottom;     // Same height as frame y axis 

// Check if there's remaining area
if (sliceHidden >= sliceSeen) {
    alert("No remaining area to copy! frame cover it all");
    throw new Error("No remaining area");
}

// Calculate actual dimensions of what we're copying
var copyWidth = sliceSeen - sliceHidden;
// var copyHeight = sliceBottom - sliceTop;

// Create new document for the hidden part + dimension pareil
var destDoc = app.documents.add(frameWidth, frameHeight, 300, "MagicalStuff");

// Select the hidden area 
app.activeDocument = srcDoc;
srcDoc.selection.select([
    [sliceHidden, sliceTop],
    [sliceSeen, sliceTop],
    [sliceSeen, sliceBottom],
    [sliceHidden, sliceBottom]
]);

// Copie collé
srcDoc.selection.copy();
app.activeDocument = destDoc;
destDoc.paste();

// Position the content properly within the frame
var pastedLayer = destDoc.activeLayer;

// Get the current position of the pasted content
var pastedBounds = pastedLayer.bounds;
// var pastedLeft = pastedBounds[0].as("px");
var pastedTop = pastedBounds[1].as("px"); // make sure the y axis is good to go  

// Calculate how much to move it to align with the left edge of the canvas
var moveX = -1080;  // Move to left edge of canvas
var moveY = firstFrameTop - pastedTop;  // 0 does not work because idk 

// Apply the translation put it to action ^
pastedLayer.translate(moveX, moveY);  

destDoc.selection.deselect(); // remove any active selection 

alert("Shit've been coocked 👨🏿🍳: " + frameWidth + "x" + frameHeight + " pixels.");
