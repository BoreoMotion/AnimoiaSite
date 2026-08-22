:tocdepth: 2

.. _effects-stylize:

Stylize
=======

Turns the image into a graphic or textured treatment. Every effect below is listed in the sidebar, so you can jump straight to one. Return to :doc:`../effects-reference` for stack behavior shared by all effects.

.. _effect-minimax:

Minimax
-------

Expands bright or dark regions to grow, choke, or clean up edges. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Operation
     - Menu
     - Chooses the visual form minimax takes.
   * - Radius
     - Number
     - Changes how far the effect spreads outward from each affected pixel or point.
   * - Channel
     - Menu
     - Chooses which color or alpha channel drives minimax.
   * - Direction
     - Menu
     - Chooses the direction in which the effect travels, stretches, or faces.
   * - Don't Shrink Edges
     - Toggle
     - Turns don't shrink edges on or off.

.. _effect-quantize:

Posterize
---------

Reduces smooth color transitions into distinct tonal bands. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Level
     - Number
     - Sets how many brightness steps each channel is collapsed into. Low values give a few visibly flat bands of color; high values keep gradients nearly smooth.

.. _effect-glow:

Glow
----

Applies a glow look to the layer. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Quality
     - Menu
     - Changes edge smoothness and fine detail; higher settings produce a cleaner result but preview more slowly.
   * - Threshold
     - Number
     - Chooses which tonal values are affected; moving it changes where the effect begins to appear.
   * - Radius
     - Number
     - Changes how far the effect spreads outward from each affected pixel or point.
   * - Exposure
     - Number
     - Makes the affected image or tonal region brighter or darker.
   * - Intensity
     - Number
     - Changes how pronounced the light, color, texture, or distortion appears.
   * - Falloff
     - Number
     - Sets how gradually the result weakens as it moves away from its strongest point.

.. _effect-patterned-noise:

Patterned Noise
---------------

Adds an evolving organic noise texture. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Amount
     - Number
     - Increases or reduces how strongly patterned noise changes the layer.
   * - Evolution
     - Number
     - Changes the internal arrangement of the pattern, producing animation without simply moving it.

.. _effect-pixelize:

Pixelize
--------

Applies a pixelize look to the layer. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Cell Size
     - Number
     - Sets how large each block of flat color is, so higher values coarsen the image into fewer, bigger pixels.
   * - Sharp Colors
     - Toggle
     - Turns sharp colors on or off.
   * - Repeat Edge Pixels
     - Toggle
     - Extends the outermost pixels beyond the layer edge instead of sampling transparency, which stops the edges from darkening or going soft.

.. _effect-sand:

Sand
----

Breaks the image into adjustable grains for a scattered, granular look. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Shape
     - Menu
     - Chooses the visual form sand takes.
   * - Pixel Size
     - Number
     - Sets how large each grain is.
   * - Shape Size
     - Number
     - Chooses the visual form sand takes.
   * - Distribution
     - Menu
     - Chooses how the grains are scattered, from an even spread to a clumped, irregular one.
   * - Random Position
     - Number
     - Moves the random position in the viewer, changing where sand is centered or begins.
   * - Random Scale
     - Number
     - Changes the irregular variation in the sand, from calm and even to visibly scattered.
   * - Random Rotation
     - Number
     - Rotates the random around its center.
   * - Random Opacity
     - Number
     - Changes the visibility of the random portion.
   * - Evolution
     - Number
     - Changes the internal arrangement of the pattern, producing animation without simply moving it.
   * - Random Seed
     - Number
     - Changes the irregular variation in the sand, from calm and even to visibly scattered.
   * - Sharp Colors
     - Toggle
     - Turns sharp colors on or off.
   * - Repeat Edge Pixels
     - Toggle
     - Extends the outermost pixels beyond the layer edge instead of sampling transparency, which stops the edges from darkening or going soft.

.. _effect-chromatic-aberration:

Dispersion
----------

Splits colors into streaked spectral fragments. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Quality
     - Menu
     - Changes edge smoothness and fine detail; higher settings produce a cleaner result but preview more slowly.
   * - Mode
     - Menu
     - Chooses how the color fringes spread: Zoom pushes them outward from the center, Linear streaks them all in one direction, and Radial swings them around the center.
   * - Amount
     - Number
     - Sets how far the red, green, and blue channels pull apart, widening the rainbow fringing along edges.
   * - Linear Angle
     - Number
     - Points the direction the color fringes streak, and only matters while **Mode** is set to Linear — Zoom and Radial derive their direction from the center instead.
   * - Dispersion Center
     - 2D control
     - Moves the dispersion center in the viewer, changing where dispersion is centered or begins.
   * - Lens Distortion
     - Number
     - Bends the separation the way a real lens does, so fringing stays subtle near the center and grows toward the frame edges. Negative values curve it the other way.
   * - Repeat Edge Pixels
     - Toggle
     - Extends the outermost pixels beyond the layer edge instead of sampling transparency, which stops the edges from darkening or going soft.

.. _effect-vignette:

Vignette
--------

Darkens or softens the frame edges to draw attention inward. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Amount
     - Number
     - Increases or reduces how strongly vignette changes the layer.
   * - Softness
     - Number
     - Softens hard boundaries and creates a more gradual transition.

.. _effect-edge-detect:

Find Edges
----------

Reveals contrast boundaries as graphic outlines. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Invert
     - Toggle
     - Reverses the affected and unaffected areas or swaps light and dark behavior.
   * - Blend With Original
     - Number
     - Fades the detected outlines back toward the original image.

.. _effect-emboss:

Bevel & Emboss
--------------

Applies a bevel & emboss look to the layer. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Quality
     - Menu
     - Changes edge smoothness and fine detail; higher settings produce a cleaner result but preview more slowly.
   * - Direction
     - Menu
     - Chooses the direction in which the effect travels, stretches, or faces.
   * - Size
     - Number
     - Changes the overall scale of the generated detail or affected area.
   * - Depth
     - Number
     - Sets how far the surface appears to be raised, deepening the shadow and highlight on either side of each edge.
   * - Soften
     - Number
     - Rounds the embossed ridges so they look bevelled rather than sharply cut.
   * - Azimuth
     - Number
     - Sets the compass direction the light comes from, which decides which side of each ridge is lit.
   * - Elevation
     - Number
     - Sets how high the light sits. Low angles rake across the surface for long shadows; high angles light it flatly from above.
   * - Highlight Color
     - Color
     - Sets the color used for the highlight portion of the result.
   * - Highlight Opacity
     - Number
     - Changes the visibility of the highlight portion.
   * - Shadow Color
     - Color
     - Sets the color used for the shadow portion of the result.
   * - Shadow Opacity
     - Number
     - Changes the visibility of the shadow portion.

.. _effect-linear-array:

Linear Array
------------

Applies a linear array look to the layer. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Copies
     - Number
     - Sets how many repeated copies are drawn; each one stacks another visible echo of the layer.
   * - Offset
     - 2D control
     - Shifts the result away from its original position or phase.
   * - Rotation Step
     - Number
     - Rotates the step around its center.
   * - Scale Step
     - Number
     - Scales each successive copy by this much, so the row of repeats grows or tapers away.
   * - End Opacity
     - Number
     - Changes the visibility of the end portion.
   * - Anchor Point
     - 2D control
     - Moves the anchor point in the viewer, changing where linear array is centered or begins.
   * - Stacking
     - Menu
     - Chooses which copies are drawn in front when they overlap.

.. _effect-radial-array:

Radial Array
------------

Applies a radial array look to the layer. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Copies
     - Number
     - Sets how many repeated copies are drawn; each one stacks another visible echo of the layer.
   * - Center
     - 2D control
     - Moves the visual center or origin of the effect across the layer.
   * - Radius
     - Number
     - Changes how far the effect spreads outward from each affected pixel or point.
   * - Auto Angle (360��/Copies)
     - Toggle
     - Sets how many repeated copies are drawn; each one stacks another visible echo of the layer.
   * - Angle Step
     - Number
     - Rotates each successive copy by this much, so the ring of repeats fans around the center.
   * - Phase
     - Number
     - Slides a repeating wave or pattern through its cycle.
   * - Orient Copies
     - Toggle
     - Sets how many repeated copies are drawn; each one stacks another visible echo of the layer.
   * - Scale Step
     - Number
     - Scales each successive copy, making the copies shrink or grow as they go around.
   * - End Opacity
     - Number
     - Changes the visibility of the end portion.
   * - Stacking
     - Menu
     - Chooses which copies are drawn in front when they overlap.

.. _effect-grain:

Grain
-----

Applies a grain look to the layer. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Intensity
     - Number
     - Changes how pronounced the light, color, texture, or distortion appears.
   * - Size
     - Number
     - Changes the overall scale of the generated detail or affected area.
   * - Softness
     - Number
     - Softens hard boundaries and creates a more gradual transition.
   * - Aspect Ratio
     - Number
     - Stretches the grain horizontally, so it reads as streaks rather than round specks.
   * - Monochromatic
     - Toggle
     - Turns monochromatic on or off.
   * - Saturation
     - Number
     - Makes the affected colors more vivid or more muted.
   * - Tint Amount
     - Number
     - Blends the grain toward a color instead of neutral grey.
   * - Tint Color
     - Color
     - Sets the color used for the tint portion of the result.
   * - Animation Speed
     - Number
     - Sets how quickly grain evolves or repeats over time.
   * - Animate Smoothly
     - Toggle
     - Rounds off abrupt changes, giving gentler contours or steadier motion.
   * - Random Seed
     - Number
     - Changes the irregular variation in the grain, from calm and even to visibly scattered.

.. _effect-noise-hls:

Noise HLS
---------

Applies a noise hls look to the layer. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Noise
     - Menu
     - Changes the irregular variation in the noise hls, from calm and even to visibly scattered.
   * - Hue
     - Number
     - Rotates the affected colors around the color wheel.
   * - Lightness
     - Number
     - Makes the affected image or tonal region brighter or darker.
   * - Saturation
     - Number
     - Makes the affected colors more vivid or more muted.
   * - Noise Phase
     - Number
     - Changes the irregular variation in the noise hls, from calm and even to visibly scattered.

.. _effect-halftone:

Halftone
--------

Applies a halftone look to the layer. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Screen
     - Menu
     - Chooses the ink separation the dot screen imitates, from a single channel to a full four-color print.
   * - Dot
     - Menu
     - Chooses the shape each dot is drawn as, which is what gives the print its character.
   * - Cell Size
     - Number
     - Sets how large each halftone cell is, so bigger cells give a coarser, more obviously printed look.
   * - Contrast
     - Number
     - Widens or narrows the gap between the light and dark areas.
   * - Gray Component Replacement
     - Number
     - Chooses which color or alpha channel drives halftone.
   * - Under Color Removal
     - Number
     - Removes color ink underneath the black, which keeps dark areas from turning muddy the way over-inked print does.
   * - Screen Angle
     - Number
     - Rotates the dot grid. Offsetting the angles between inks is what stops them forming a moiré pattern.
   * - Opacity
     - Number
     - Changes how strongly the effect is visible without changing its shape.
   * - Blend Mode
     - Menu
     - Changes how the effect’s colors and brightness combine with the image beneath it.

.. _effect-dither:

Dither
------

Applies a dither look to the layer. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Type
     - Menu
     - Chooses the visual form dither takes.
   * - Levels
     - Number
     - Sets how many distinct steps the tones collapse into: low values give visibly flat bands, high values keep gradients smooth.
   * - Pixel Size
     - Number
     - Sets how large each dithered pixel block is, coarsening the pattern of dots used to fake the missing colors.
   * - Monochrome
     - Toggle
     - Turns monochrome on or off.
   * - Amount
     - Number
     - Increases or reduces how strongly dither changes the layer.

.. _effect-composite:

Composite
---------

Layers the processed image back over the original. Add it from **Effects > Stylize** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Opacity
     - Number
     - Changes how strongly the effect is visible without changing its shape.
   * - Blending Mode
     - Menu
     - Chooses how the processed image is combined back with the original.
   * - RGB Only
     - Toggle
     - Turns rgb only on or off.
   * - Composite Order
     - Menu
     - Chooses which image sits on top: the original over the processed result, or the other way around.

