:tocdepth: 2

.. _effects-color:

Color
=====

Adjusts tone, contrast, and color balance. Every effect below is listed in the sidebar, so you can jump straight to one. Return to :doc:`../effects-reference` for stack behavior shared by all effects.

.. _effect-recolor:

Recolor
-------

Changes the image’s color and tone with recolor. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Hue
     - Number
     - Rotates the affected colors around the color wheel.
   * - Saturation
     - Number
     - Makes the affected colors more vivid or more muted.
   * - Lightness
     - Number
     - Makes the affected image or tonal region brighter or darker.
   * - Amount
     - Number
     - Increases or reduces how strongly recolor changes the layer.

.. _effect-threshold:

Threshold
---------

Changes the image’s color and tone with threshold. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Level
     - Number
     - Raises or lowers the brightness of this part of the image.
   * - Feather
     - Number
     - Softens the edge by blending it gradually into the surrounding image.
   * - Channel
     - Menu
     - Chooses which color or alpha channel drives threshold.
   * - Invert
     - Toggle
     - Reverses the affected and unaffected areas or swaps light and dark behavior.

.. _effect-invert:

Invert
------

Changes the image’s color and tone with invert. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Channel
     - Menu
     - Chooses which color or alpha channel drives invert.
   * - Blend With Original
     - Number
     - Fades the inverted result back toward the original image.

.. _effect-swap-channels:

Swap RGBA
---------

Rebuilds the image by routing different color and alpha channels into the output. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Take Alpha From
     - Menu
     - Chooses which channel of the source image is routed into this output channel.
   * - Take Red From
     - Menu
     - Chooses which channel of the source image is routed into this output channel.
   * - Take Green From
     - Menu
     - Chooses which channel of the source image is routed into this output channel.
   * - Take Blue From
     - Menu
     - Chooses which channel of the source image is routed into this output channel.

.. _effect-swap-hsv:

Swap HSV
--------

Rebuilds color by exchanging hue, saturation, brightness, and alpha information. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Take Alpha From
     - Menu
     - Chooses which channel of the source image is routed into this output channel.
   * - Take Hue From
     - Menu
     - Chooses which channel of the source image is routed into this output channel.
   * - Take Saturation From
     - Menu
     - Chooses which channel of the source image is routed into this output channel.
   * - Take Value From
     - Menu
     - Chooses which channel of the source image is routed into this output channel.

.. _effect-color-ramp:

Color Ramp
----------

Recolors shadows through highlights with a gradient. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Gradient Ramp
     - Gradient
     - Edits the colors and their positions, which is what the image’s dark-to-bright tones are recolored with.
   * - Smoothness
     - Number
     - Rounds off abrupt changes, giving gentler contours or steadier motion.
   * - Offset
     - Number
     - Shifts the result away from its original position or phase.
   * - Multiply
     - Number
     - Scales the mapped result up or down, making its colors weaker or more pronounced.
   * - Blend With Original
     - Number
     - Fades the recolored result back toward the original image.

.. _effect-leave-color:

Leave Color
-----------

Changes the image’s color and tone with leave color. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Amount to Decolor
     - Number
     - Sets the color used for the amount to de portion of the result.
   * - Color To Leave
     - Color
     - Sets the color contributed by color to leave in leave color.
   * - Tolerance
     - Number
     - Widens or narrows the set of colors and tones the effect includes.
   * - Edge Softness
     - Number
     - Softens the boundary between the colors that are kept and the ones drained to grey, so the change is gradual rather than abrupt.
   * - Match Colors
     - Menu
     - Chooses how closely a pixel must match to be kept: **Using RGB** compares the full color, while **Using Hue** ignores brightness and saturation so shadowed and washed-out versions of the color survive too.

.. _effect-levels-rgba:

Levels RGBA
-----------

Changes the image’s color and tone with levels rgba. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Channel
     - Menu
     - Chooses which color or alpha channel drives levels rgba.
   * - Input Black
     - Number
     - Sets which incoming tone becomes pure black, deepening the shadows and clipping anything below it.
   * - Input White
     - Number
     - Sets which incoming tone becomes pure white, brightening the highlights and clipping anything above it.
   * - Gamma
     - Number
     - Brightens or darkens the middle tones while leaving the deepest shadows and brightest highlights closer to where they were.
   * - Output Black
     - Number
     - Sets the darkest tone the effect can produce, lifting the blacks toward grey or pushing them down.
   * - Output White
     - Number
     - Sets the brightest tone the effect can produce, pulling the whites down or raising them.
   * - Red Input Black
     - Number
     - Sets which incoming tone becomes pure black, deepening the shadows and clipping anything below it.
   * - Red Input White
     - Number
     - Sets which incoming tone becomes pure white, brightening the highlights and clipping anything above it.
   * - Red Gamma
     - Number
     - Brightens or darkens the middle tones while leaving the deepest shadows and brightest highlights closer to where they were.
   * - Red Output Black
     - Number
     - Sets the darkest tone the effect can produce, lifting the blacks toward grey or pushing them down.
   * - Red Output White
     - Number
     - Sets the brightest tone the effect can produce, pulling the whites down or raising them.
   * - Green Input Black
     - Number
     - Sets which incoming tone becomes pure black, deepening the shadows and clipping anything below it.
   * - Green Input White
     - Number
     - Sets which incoming tone becomes pure white, brightening the highlights and clipping anything above it.
   * - Green Gamma
     - Number
     - Brightens or darkens the middle tones while leaving the deepest shadows and brightest highlights closer to where they were.
   * - Green Output Black
     - Number
     - Sets the darkest tone the effect can produce, lifting the blacks toward grey or pushing them down.
   * - Green Output White
     - Number
     - Sets the brightest tone the effect can produce, pulling the whites down or raising them.
   * - Blue Input Black
     - Number
     - Sets which incoming tone becomes pure black, deepening the shadows and clipping anything below it.
   * - Blue Input White
     - Number
     - Sets which incoming tone becomes pure white, brightening the highlights and clipping anything above it.
   * - Blue Gamma
     - Number
     - Brightens or darkens the middle tones while leaving the deepest shadows and brightest highlights closer to where they were.
   * - Blue Output Black
     - Number
     - Sets the darkest tone the effect can produce, lifting the blacks toward grey or pushing them down.
   * - Blue Output White
     - Number
     - Sets the brightest tone the effect can produce, pulling the whites down or raising them.
   * - Alpha Input Black
     - Number
     - Sets which incoming tone becomes pure black, deepening the shadows and clipping anything below it.
   * - Alpha Input White
     - Number
     - Sets which incoming tone becomes pure white, brightening the highlights and clipping anything above it.
   * - Alpha Gamma
     - Number
     - Brightens or darkens the middle tones while leaving the deepest shadows and brightest highlights closer to where they were.
   * - Alpha Output Black
     - Number
     - Sets the darkest tone the effect can produce, lifting the blacks toward grey or pushing them down.
   * - Alpha Output White
     - Number
     - Sets the brightest tone the effect can produce, pulling the whites down or raising them.

.. _effect-curves:

Curves
------

Changes the image’s color and tone with curves. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Channel
     - Menu
     - Chooses which color or alpha channel drives curves.
   * - RGB Curve
     - Curve
     - Reshapes tonal or timing response by bending the rgb curve curve.
   * - Red Curve
     - Curve
     - Reshapes tonal or timing response by bending the red curve curve.
   * - Green Curve
     - Curve
     - Reshapes tonal or timing response by bending the green curve curve.
   * - Blue Curve
     - Curve
     - Reshapes tonal or timing response by bending the blue curve curve.
   * - Alpha Curve
     - Curve
     - Reshapes tonal or timing response by bending the alpha curve curve.
   * - Blend with Original
     - Number
     - Fades the adjusted result back toward the original image.

.. _effect-brightness-contrast:

Brightness & Contrast
---------------------

Changes the image’s color and tone with brightness & contrast. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Brightness
     - Number
     - Makes the affected image or tonal region brighter or darker.
   * - Contrast
     - Number
     - Widens or narrows the gap between the light and dark areas.

.. _effect-black-white:

Black & White
-------------

Changes the image’s color and tone with black & white. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Reds
     - Number
     - Sets how bright reds become in the greyscale result, letting a red area read as light or dark grey.
   * - Yellows
     - Number
     - Sets how bright yellows become in the greyscale result.
   * - Greens
     - Number
     - Sets how bright greens become in the greyscale result.
   * - Cyans
     - Number
     - Sets how bright cyans become in the greyscale result.
   * - Blues
     - Number
     - Sets how bright blues become in the greyscale result, which is the usual way to darken a sky.
   * - Magentas
     - Number
     - Sets how bright magentas become in the greyscale result.
   * - Tint
     - Toggle
     - Turns tint on or off.
   * - Tint Color
     - Color
     - Sets the color used for the tint portion of the result.

.. _effect-cc-toner:

Tint
----

Recolors the image by mapping chosen colors onto its shadows, midtones, and highlights. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Tones
     - Menu
     - Chooses how many colors the tonal range is split across: **Duotone** maps only shadows and highlights, **Tritone** adds a midtone, and **Pentone** uses all five color slots.
   * - Highlights
     - Color
     - Sets the color the brightest tones become.
   * - Brights
     - Color
     - Sets the color the upper midtones become. It is used by **Pentone** only.
   * - Midtones
     - Color
     - Sets the color the middle tones become. **Duotone** ignores it.
   * - Darktones
     - Color
     - Sets the color the lower midtones become. It is used by **Pentone** only.
   * - Shadows
     - Color
     - Sets the color the darkest tones become.
   * - Blend w. Original
     - Number
     - Fades the recolored result back toward the original image.

.. _effect-exposure:

Exposure
--------

Changes the image’s color and tone with exposure. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Channels
     - Menu
     - Chooses whether one exposure setting applies to the whole image or each color channel is exposed on its own.
   * - Exposure
     - Number
     - Makes the affected image or tonal region brighter or darker.
   * - Offset
     - Number
     - Shifts the result away from its original position or phase.
   * - Gamma Correction
     - Number
     - Brightens or darkens the middle tones while leaving the deepest shadows and brightest highlights closer to where they were.
   * - Red Exposure
     - Number
     - Makes the affected image or tonal region brighter or darker.
   * - Red Offset
     - Number
     - Lifts or lowers the red channel’s black point, tinting the shadows without moving the highlights.
   * - Red Gamma
     - Number
     - Brightens or darkens the middle tones while leaving the deepest shadows and brightest highlights closer to where they were.
   * - Green Exposure
     - Number
     - Makes the affected image or tonal region brighter or darker.
   * - Green Offset
     - Number
     - Lifts or lowers the green channel’s black point, tinting the shadows without moving the highlights.
   * - Green Gamma
     - Number
     - Brightens or darkens the middle tones while leaving the deepest shadows and brightest highlights closer to where they were.
   * - Blue Exposure
     - Number
     - Makes the affected image or tonal region brighter or darker.
   * - Blue Offset
     - Number
     - Lifts or lowers the blue channel’s black point, tinting the shadows without moving the highlights.
   * - Blue Gamma
     - Number
     - Brightens or darkens the middle tones while leaving the deepest shadows and brightest highlights closer to where they were.

.. _effect-hue-saturation:

Hue/Saturation
--------------

Changes the image’s color and tone with hue/saturation. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Hue
     - Number
     - Rotates the affected colors around the color wheel.
   * - Saturation
     - Number
     - Makes the affected colors more vivid or more muted.
   * - Lightness
     - Number
     - Makes the affected image or tonal region brighter or darker.

.. _effect-levels:

Levels
------

Changes the image’s color and tone with levels. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Input Black
     - Number
     - Sets which incoming tone becomes pure black, deepening the shadows and clipping anything below it.
   * - Input White
     - Number
     - Sets which incoming tone becomes pure white, brightening the highlights and clipping anything above it.
   * - Gamma
     - Number
     - Brightens or darkens the middle tones while leaving the deepest shadows and brightest highlights closer to where they were.
   * - Output Black
     - Number
     - Sets the darkest tone the effect can produce, lifting the blacks toward grey or pushing them down.
   * - Output White
     - Number
     - Sets the brightest tone the effect can produce, pulling the whites down or raising them.

.. _effect-color-correction:

Color Correction
----------------

Grades the image in one place: exposure and contrast, a per-band color mixer, and shadow, midtone, and highlight color wheels. Add it from **Effects > Color** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Temperature
     - Number
     - Warms the image toward orange or cools it toward blue, as if changing the white balance of the light it was shot under.
   * - Tint
     - Number
     - Shifts the white balance along the other axis, from green toward magenta, which is what corrects a color cast the temperature control cannot.
   * - Exposure
     - Number
     - Brightens or darkens the whole image in photographic stops, as if the shot had been given more or less light.
   * - Contrast
     - Number
     - Pushes the lights and darks apart for a punchier image, or pulls them together for a flatter one.
   * - Highlights
     - Number
     - Recovers or brightens only the bright areas, leaving the shadows where they are.
   * - Shadows
     - Number
     - Lifts detail out of the dark areas or crushes them further down, without moving the highlights.
   * - Whites
     - Number
     - Sets where the very brightest tones land, which is what controls clipping at the top end.
   * - Blacks
     - Number
     - Sets how deep the very darkest tones go, which is what controls crushing at the bottom end.
   * - Texture
     - Number
     - Emphasizes fine surface detail without affecting overall contrast, bringing out grain and small features.
   * - Clarity
     - Number
     - Adds midtone contrast at a broader scale than **Texture**, giving the image more presence and bite.
   * - Dehaze
     - Number
     - Cuts through atmospheric haze by deepening contrast and restoring color in washed-out areas. Negative values add haze back.
   * - Vibrance
     - Number
     - Boosts the more muted colors while largely sparing already-saturated ones, so skin tones stay natural.
   * - Saturation
     - Number
     - Makes every color in the image more vivid or more muted at the same rate.
   * - Hue Reds
     - Number
     - Shifts the hue of reds toward neighboring colors while leaving other color bands less affected.
   * - Hue Oranges
     - Number
     - Shifts the hue of oranges toward neighboring colors while leaving other color bands less affected.
   * - Hue Yellows
     - Number
     - Shifts the hue of yellows toward neighboring colors while leaving other color bands less affected.
   * - Hue Greens
     - Number
     - Shifts the hue of greens toward neighboring colors while leaving other color bands less affected.
   * - Hue Aquas
     - Number
     - Shifts the hue of aquas toward neighboring colors while leaving other color bands less affected.
   * - Hue Blues
     - Number
     - Shifts the hue of blues toward neighboring colors while leaving other color bands less affected.
   * - Hue Purples
     - Number
     - Shifts the hue of purples toward neighboring colors while leaving other color bands less affected.
   * - Hue Magentas
     - Number
     - Shifts the hue of magentas toward neighboring colors while leaving other color bands less affected.
   * - Saturation Reds
     - Number
     - Makes reds more vivid or more muted.
   * - Saturation Oranges
     - Number
     - Makes oranges more vivid or more muted.
   * - Saturation Yellows
     - Number
     - Makes yellows more vivid or more muted.
   * - Saturation Greens
     - Number
     - Makes greens more vivid or more muted.
   * - Saturation Aquas
     - Number
     - Makes aquas more vivid or more muted.
   * - Saturation Blues
     - Number
     - Makes blues more vivid or more muted.
   * - Saturation Purples
     - Number
     - Makes purples more vivid or more muted.
   * - Saturation Magentas
     - Number
     - Makes magentas more vivid or more muted.
   * - Luminance Reds
     - Number
     - Makes reds brighter or darker.
   * - Luminance Oranges
     - Number
     - Makes oranges brighter or darker.
   * - Luminance Yellows
     - Number
     - Makes yellows brighter or darker.
   * - Luminance Greens
     - Number
     - Makes greens brighter or darker.
   * - Luminance Aquas
     - Number
     - Makes aquas brighter or darker.
   * - Luminance Blues
     - Number
     - Makes blues brighter or darker.
   * - Luminance Purples
     - Number
     - Makes purples brighter or darker.
   * - Luminance Magentas
     - Number
     - Makes magentas brighter or darker.
   * - Shadows Wheel
     - 2D control
     - Tints the dark areas. Drag out from the center of the wheel: the direction picks the hue and the distance sets how strongly it is applied.
   * - Shadows Luminance
     - Number
     - Brightens or darkens the shadow region on its own.
   * - Midtones Wheel
     - 2D control
     - Tints the middle tones, where most of the image usually sits. Direction picks the hue, distance the strength.
   * - Midtones Luminance
     - Number
     - Brightens or darkens the midtone region on its own.
   * - Highlights Wheel
     - 2D control
     - Tints the bright areas. Direction picks the hue, distance the strength.
   * - Highlights Luminance
     - Number
     - Brightens or darkens the highlight region on its own.

