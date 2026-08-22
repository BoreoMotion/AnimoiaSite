:tocdepth: 2

.. _effects-generate:

Generate
========

Draws new imagery that can be blended over the layer. Every effect below is listed in the sidebar, so you can jump straight to one. Return to :doc:`../effects-reference` for stack behavior shared by all effects.

.. _effect-fill:

Fill
----

Creates a new fill graphic that can be combined with the layer. Add it from **Effects > Generate** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Fill Type
     - Menu
     - Chooses the visual form fill takes.
   * - Color
     - Color
     - Sets the principal color used by the effect.
   * - Gradient
     - Gradient
     - Edits the colors and their positions, which is what the image’s dark-to-bright tones are recolored with.
   * - Gradient Start
     - 2D control
     - Edits the colors and their positions, which is what the image’s dark-to-bright tones are recolored with.
   * - Gradient End
     - 2D control
     - Edits the colors and their positions, which is what the image’s dark-to-bright tones are recolored with.
   * - Invert Alpha
     - Toggle
     - Turns invert alpha on or off.

.. _effect-grid:

Grid
----

Creates a new grid graphic that can be combined with the layer. Add it from **Effects > Generate** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Anchor
     - 2D control
     - Moves anchor in the viewer, changing the placement or direction of grid.
   * - Size From
     - Menu
     - Chooses what sets the cell size: a corner point, the cell width and height, or a fixed number of divisions.
   * - Corner
     - 2D control
     - Sets how sharply or how smoothly the corners turn.
   * - Width
     - Number
     - Changes the horizontal size or thickness of the result.
   * - Height
     - Number
     - Changes the vertical size or thickness of the result.
   * - Border
     - Number
     - Sets how thick the grid lines are drawn. ``0`` hides them.
   * - Feather
     - Number
     - Softens the edge by blending it gradually into the surrounding image.
   * - Invert Grid
     - Toggle
     - Turns invert grid on or off.
   * - Color
     - Color
     - Sets the principal color used by the effect.
   * - Opacity
     - Number
     - Changes how strongly the effect is visible without changing its shape.
   * - Blending Mode
     - Menu
     - Chooses how the generated grid is combined with the layer beneath it.

.. _effect-fractal-noise:

Fractal Noise
-------------

Creates a new fractal noise graphic that can be combined with the layer. Add it from **Effects > Generate** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Fractal Type
     - Menu
     - Chooses the visual form fractal noise takes.
   * - Noise Type
     - Menu
     - Changes the irregular variation in the fractal noise, from calm and even to visibly scattered.
   * - Invert
     - Toggle
     - Reverses the affected and unaffected areas or swaps light and dark behavior.
   * - Contrast
     - Number
     - Widens or narrows the gap between the light and dark areas.
   * - Brightness
     - Number
     - Makes the affected image or tonal region brighter or darker.
   * - Overflow
     - Menu
     - Chooses what happens to values pushed outside the visible range: clip them, wrap them around, or fold them back.
   * - Rotation
     - Number
     - Rotates the result around its center.
   * - Scale
     - Number
     - Makes the pattern or distortion features larger or smaller.
   * - Offset Turbulence
     - 2D control
     - Moves offset turbulence in the viewer, changing the placement or direction of fractal noise.
   * - Complexity
     - Number
     - Sets how many layers of noise are stacked, adding progressively finer detail to the pattern.
   * - Sub Influence
     - Number
     - Sets how much each finer layer of noise contributes, from a smooth base pattern to a heavily detailed one.
   * - Evolution
     - Number
     - Changes the internal arrangement of the pattern, producing animation without simply moving it.
   * - Opacity
     - Number
     - Changes how strongly the effect is visible without changing its shape.
   * - Blending Mode
     - Menu
     - Chooses how the generated noise is combined with the layer beneath it.

.. _effect-audio-spectrum:

Audio Spectrum
--------------

Draws an animated frequency display along a mask path as bars, a solid wave, dots, or an outline. Add it from **Effects > Generate** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Audio Layer
     - Layer
     - Chooses the layer whose sound is analyzed.
   * - Path
     - Mask
     - Chooses the mask on this layer that the spectrum is drawn along. Without one there is nothing to draw on.
   * - Frequency
     - Frequency range
     - Changes how tightly repeated waves, bands, or details are packed.
   * - Display Style
     - Menu
     - Chooses how the analyzed audio is drawn: **Bars** gives one line per band, **Solid Wave** a single filled waveform, **Dots** an animated dot at each band tip, and **Outline** the waveform contour stroked without a fill.
   * - Frequency bands
     - Number
     - Sets how many bands the spectrum is divided into, which is how many bars, dots, or waveform samples get drawn.
   * - Maximum Height
     - Number
     - Sets how far the loudest band reaches away from the path.
   * - Audio Offset (milliseconds)
     - Number
     - Shifts which moment of the audio is read, letting you nudge the display into sync with the sound.
   * - Average Time (milliseconds)
     - Number
     - Averages the audio over a window centered on the current frame instead of reading a single instant, which smooths out the jitter of a fast-moving signal. ``0`` reads the instant.
   * - Thickness
     - Number
     - Sets how heavy each drawn bar, dot, or stroke is.
   * - Color
     - Color
     - Sets the principal color used by the effect.
   * - Side Options
     - Menu
     - Chooses whether the display is mirrored on both sides of the path or drawn on one side only.
   * - Duration Averaging
     - Toggle
     - Averages the spectrum across the layer’s whole duration instead of tracking it frame by frame, giving a static display of the overall mix.
   * - Composite On Original
     - Toggle
     - Draws the spectrum over the layer’s own image instead of replacing it.

