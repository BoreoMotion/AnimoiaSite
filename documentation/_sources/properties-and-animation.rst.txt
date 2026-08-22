.. _properties-and-animation:

Properties and animation
========================

Layer Properties panel
----------------------

The Layer tab shows the last selected layer. Search filters rows by property name without changing values, keyframes, modifiers, or collapsed state. Edits apply to every selected compatible layer: typed values set exact values, while interactive transform scrubs apply relative changes so each layer keeps its offset.

A stopwatch enables animation and creates a keyframe at the playhead. With animation active, changing a value writes or updates the current keyframe. Turning a stopwatch off removes that property's keyframes. Right-click or ``Alt``-click a supported property name/stopwatch for Animation Modifiers.

.. _pinned-effects:

Pinned groups
~~~~~~~~~~~~~

Above the Effects list, the panel shows a fixed set of property groups that depend on the layer: **Transform**, **Shape**, **Solid**, **Text**, **Retime**, **Stabilization**, and **Audio**.

These are pinned rather than ordinary effects. They present like effects — you can select, reset, copy, and paste them the same way — but they are the layer's own built-in properties, not entries in the effect stack. That distinction shows up in what you cannot do to them: they can never be added, duplicated, deleted, or renamed, because a layer has exactly one Transform and it is not removable.

Pasting a pinned group behaves differently too. Instead of appending something to the effect stack, it merges into the target layer's matching group, so pasting Transform onto another layer overwrites that layer's Transform rather than giving it a second one.

Transform
~~~~~~~~~

.. list-table:: Transform properties
   :header-rows: 1
   :widths: 22 16 44

   * - Name
     - Type
     - Description
   * - Anchor
     - 2D pixels
     - Layer pivot in local space.
   * - Position
     - 2D pixels
     - Anchor position in composition/parent space.
   * - Scale
     - 2D percent
     - Layer scale. The chain preserves the layer's X:Y ratio while editing fields.
   * - Rotation
     - Revolutions + degrees
     - Unlimited 2D rotation.
   * - Opacity
     - Percent
     - Whole-layer transparency, 0–100.

.. _shape-layers:

Shape
~~~~~

.. list-table:: Shape properties
   :header-rows: 1
   :widths: 24 15 44

   * - Name
     - Type
     - Description
   * - Size
     - 2D pixels
     - Parametric rectangle/ellipse/polygon/star dimensions.
   * - Path
     - Bezier path
     - Pen-shape geometry; supports path keyframes.
   * - Fill
     - Paint/color
     - None, Solid, Linear, Radial; gradients are static while solid color is animatable.
   * - Stroke
     - Paint/color
     - None, Solid, Linear, Radial, or Path gradient.
   * - Stroke Width
     - Pixels
     - Width of the outline.
   * - Gradient Offset
     - Degrees
     - Moves a Path gradient around the stroke; 360° is one full cycle.
   * - Corner Radius
     - Pixels
     - Rectangle corner rounding.
   * - Points
     - Integer
     - Polygon/star points, 3–24.
   * - Inner Radius
     - Percent
     - Star inner radius relative to its outer radius.
   * - Stroke Ends
     - Menu
     - Round or flat exposed ends.
   * - Stroke Joints
     - Menu
     - Round or miter corners.
   * - Trim Start
     - Percent
     - Beginning of the visible stroked span.
   * - Trim End
     - Percent
     - End of the visible stroked span.
   * - Trim Offset
     - Degrees
     - Rotates the trimmed span around the path.
   * - Dash
     - Pixels
     - Dash length; 0 gives a solid stroke.
   * - Dash Gap
     - Pixels
     - Gap length; zero or less follows the dash length.
   * - Dash Offset
     - Pixels
     - Slides the dash pattern.
   * - Start/End Length
     - Percent
     - Portion of the visible stroke tapered at each end.
   * - Start/End Width
     - Percent
     - Tip width relative to Stroke Width.
   * - Start/End Ease
     - Percent
     - Curves each taper profile.

Solid
~~~~~

**Color** is an animatable RGBA solid color and also opens the paint editor for None, Solid, Linear, or Radial paint. New solids fill the current composition. A later composition resize freezes their previous intrinsic pixel size rather than distorting layer-space effects.

.. _text-layers:

Text
~~~~

**Source Text** is hold-keyframed: each keyframe switches the complete string and its formatting snapshot without interpolation. **Box Size** exists for paragraph text and controls wrapping independently of Transform Scale.

.. list-table:: Text character properties
   :header-rows: 1
   :widths: 25 16 41

   * - Name
     - Type
     - Description
   * - Font Family
     - Searchable menu
     - Lists the fonts installed on your system, with built-in fallbacks.
   * - Font Style
     - Menu
     - Installed family styles or Regular/Italic/Bold/Bold Italic fallback.
   * - Font Size
     - Pixels
     - Character size; can be overridden per range.
   * - Leading
     - Multiplier/value
     - Line height.
   * - Tracking
     - Spacing
     - Letter spacing.
   * - Character Width
     - Percent
     - Horizontally stretches selected characters.
   * - Bold
     - Toggle
     - Applies bold styling to the range.
   * - Italic
     - Toggle
     - Applies italic styling.
   * - Underline
     - Toggle
     - Underlines characters.
   * - All Caps
     - Toggle
     - Uppercase presentation.
   * - Small Caps
     - Toggle
     - Small-cap presentation.
   * - Superscript
     - Toggle
     - Raises/scales the range.
   * - Subscript
     - Toggle
     - Lowers/scales the range; mutually exclusive with superscript.
   * - Fill
     - Paint
     - Range-aware solid/gradient/none text fill.
   * - Stroke
     - Paint
     - Range-aware outline paint; width remains independent.
   * - Stroke Width
     - Pixels
     - Character outline width.
   * - Stroke Position
     - Menu
     - Inside, center, or outside placement.
   * - Paint Order
     - Toggle
     - Switches stroke-over-fill vs fill-over-stroke stacking.

Paragraph alignment offers Align Left, Center, Right, Justify Last Left, Justify Last Center, Justify Last Right, and Justify All. Box text also offers Top, Middle, and Bottom vertical alignment; these controls stay visible but disabled for point text.

Paint and color editor
----------------------

Paint modes
~~~~~~~~~~~

**None** hides that fill/stroke without discarding related width. **Solid** uses the animatable RGBA property. **Linear** and **Radial** use static gradient stops and on-canvas endpoints. **Path** is available for vector strokes and cycles the ramp around the path; edit Gradient Offset to animate its travel.

Switching gradient modes carries the same ramp while remembering each mode's geometry for the session. When several layers are selected, colors/stops update together while each layer keeps correctly mapped geometry. Text selection paints apply only to the selected characters.

Color picker
~~~~~~~~~~~~

Use the visual picker plus numeric/hex controls and opacity when that property supports alpha. Effect color parameters usually hide opacity because their shaders use opaque RGB. Eyedropper sampling reads the rendered Composition viewer.

Gradient ramp
~~~~~~~~~~~~~

Click a stop to select it, click the ramp to add one, drag to reposition, and remove a stop where the control allows it. Edit stop color and opacity in the picker. **Reverse** swaps linear endpoints or reverses radial/path stop order.

.. _animation-modifiers:

Animation modifiers
-------------------

Modifier rules
~~~~~~~~~~~~~~

A continuous numeric/2D property can combine one each of Wiggle, Time, and Parent with one main modifier: Loop, Bounce, Overshoot, or Audio. The main modifiers are mutually exclusive. Structured/discrete effect parameters usually allow Loop only; path/curve values allow Loop, Bounce, and Overshoot. Source Text allows Variables or Loop, never both. Modifier parameters can't have nested modifiers.

Wiggle
~~~~~~

Adds deterministic smooth noise without changing keyframes.

.. list-table:: Wiggle settings
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - Axis
     - X/Y/Linked/Unlinked
     - Selects affected axes. Linked sends one result to both; Unlinked generates each independently.
   * - Frequency
     - Animatable number
     - Wiggles per second.
   * - Amplitude
     - Animatable number
     - Peak deviation in property units.
   * - Phase
     - Animatable seconds
     - Moves through the noise field; use different static values to de-sync copies.

Time
~~~~

Adds ``rate × composition time`` to the property. Choose X, Y, Linked, or Unlinked for 2D values. **Multiplier** is units per second and is intentionally not animatable; the evaluator uses its static value.

Parent
~~~~~~

Copies another project's property as ``source × multiplier + shift`` and ignores the target's base value/keyframes. Pick a source with the eyedropper from the Layer panel or Timeline. Numeric sources can scale, invert, and offset; colors, booleans, and paths copy directly. For a scalar target driven by a 2D source, choose source X or Y. Parent reads the source's base/keyframed value without its modifiers, preventing recursive cycles.

Loop
~~~~

**Cycle** repeats the keyframed range. **Ping Pong** alternates forward/backward. **Offset** repeats while accumulating the end-to-start difference. **Continue** extrapolates from edge velocity. Direction can be **In**, **Out**, or **Both**. Loop needs keyframes to define a range.

Bounce
~~~~~~

Adds gravity-like rebounds after arriving at keyframes. **Amplitude** is strength as a percentage of arrival velocity, **Decay** controls how quickly rebounds shrink, and **Max Bounces** is the integer count before exact settling.

Overshoot
~~~~~~~~~

Adds a decaying sinusoidal overshoot after keyframes. **Amplitude** scales arrival velocity, **Frequency** is oscillations per second, and **Decay** controls settling speed.

.. _audio-workflows:

Audio
~~~~~

Drives a property additively from normalized audio energy. Choose an audio/video/precomp source, drag the low/high edges of the frequency band, choose axes, set **Multiplier** (and **Multiplier Y** when unlinked), and increase **Average Time** in milliseconds to smooth transients. A missing/deleted source leaves the modifier unset.

Text Variable
~~~~~~~~~~~~~

Add Variable to Source Text, give it a unique lowercase name, then type its token as ``<name>`` in the text. The token inherits formatting from its first character and behaves as one unit in canvas editing.

.. list-table:: Text Variable settings
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - Mode
     - Time/Counter/Frames
     - Chooses generated content.
   * - Time Format
     - mm:ss / hh:mm:ss / ss / ss.d
     - Display format in Time mode.
   * - Time Offset
     - Animatable seconds
     - Adds to composition time.
   * - Value
     - Animatable number
     - Counter value; keyframe it for count-ups.
   * - Decimal Places
     - Integer
     - Counter precision.
   * - Thousands Separator
     - Toggle
     - Groups counter digits.
   * - Frame Offset
     - Animatable frames
     - Adds to current frame number.
   * - Zero Padding Digits
     - Integer
     - Minimum frame-number width; 0 disables padding.

.. _animating-properties:

.. _keyframes-and-easing:

Keyframes and easing
--------------------

Keyframe selection and editing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Click, ``Shift``-click, or marquee keyframes. Copy/cut/paste preserves property-relative data; pasted keyframes start at the playhead. Dragging keeps frame snapping. Delete respects the last-interacted scope, so selected layers/effects don't steal a keyframe delete.

Easing types
~~~~~~~~~~~~

**Linear** moves at a constant interpolation rate. **Hold** keeps the earlier value until the next keyframe and is forced for discrete checkboxes/Source Text. **Bezier** uses incoming/outgoing temporal handles. Position keyframes can additionally have spatial tangents that curve the motion path independently of temporal easing.

Easing panel
~~~~~~~~~~~~

Drag the two curve handles; hold ``Shift`` to snap to quarter-grid lines. Edits apply live to selected keyframes. **Apply** reapplies the working curve. **Copy Easing** reads one keyframe's handles, or the ease between two successive keyframes, and makes it the working curve so you can apply it elsewhere. **Flip** mirrors the curve horizontally, swapping in and out behavior.

.. _easing-ranges:

How easing applies to a selection
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Every keyframe has two independent sides: its outgoing handle governs the segment *after* it, and its incoming handle governs the segment *before* it. Easing only ever writes the sides that lie inside your selection, so it cannot disturb animation on either side of it.

Selecting two adjacent keyframes describes exactly one time interval, and that interval is governed by just two of the four handles those keyframes carry — the first one's outgoing handle and the second one's incoming handle. The remaining two point at neighbouring segments and are left alone.

A single selected keyframe is the exception. With no interval to speak of, easing it affects both of its sides, which is the familiar single-keyframe behaviour.

.. note::

   Non-adjacent keyframes are grouped into contiguous runs, and each run is treated as its own range. Selecting keyframes 2, 3, and 7 gives two ranges — 2→3 and 7 on its own — so the untouched gap between 3 and 7 keeps its existing easing.

Preset library
~~~~~~~~~~~~~~

Built-in presets are Linear, Ease In Sine, Ease Out Sine, Ease In Out Sine, Ease In Out Quad, Ease In Out Cubic, Ease In Out Quart, Ease In Expo, Ease Out Expo, and Ease In Out Expo.

Save the current curve as a numbered custom preset, and hover a custom preset to delete it. Saving is skipped when the curve already exists as a built-in or custom preset, so the library will not fill up with duplicates of the same ease.

.. note::

   Your curve library belongs to the application rather than to any one project, so it follows you into every file you open — unlike :ref:`color swatches <color-panel>`, which are saved with the project because a palette belongs to the artwork. Custom presets persist on disk, and a library written by another window is picked up without a reload.

Stagger, align, and anchor
--------------------------

Stagger and sequence
~~~~~~~~~~~~~~~~~~~~

**Stagger** offsets selected whole layers, in transitions, or out transitions by an integer number of frames per layer. **Sequence** places two or more selected layers end-to-end. Order can be Ascending (top-to-bottom), Descending, or Random. Each Apply is one undo step.

Align and distribute
~~~~~~~~~~~~~~~~~~~~

With one layer, alignment uses the composition. With two or more, choose Selection or Composition. Align left, horizontal center, right, top, vertical center, or bottom. Distribution needs at least three layers and spaces them horizontally or vertically.

Anchor presets
~~~~~~~~~~~~~~

Choose top-left, top-center, top-right, middle-left, center, middle-right, bottom-left, bottom-center, or bottom-right. The layer doesn't visibly shift. Keyframed layers use the shared Insert-at-Playhead or Modify-Existing behavior.

Motion tracking
---------------

Open tracking
~~~~~~~~~~~~~

Select a video layer and choose **Track Motion…**. Add a tracker, place its feature point on a high-contrast detail, then resize its inner tracking square and outer search rectangle. The search rectangle can't be smaller than the tracking square.

.. list-table:: Tracker settings
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - Track Size
     - 10–200 px
     - Template region around the feature.
   * - Search W / Search H
     - 20–600 px
     - Region searched on the next frame.
   * - Confidence
     - 0–100%
     - Minimum accepted match score.
   * - Quality
     - Low/Medium/High
     - Low is fastest; High adds adaptive/subpixel work.

Use track-one-frame or continuous forward/backward controls. Stop with the button or ``Escape``. Progress shows frame count and ETA. Manually move a point on a frame to create an authoritative correction that re-anchors later analysis. **Smooth** applies one non-destructive smoothing pass; click repeatedly for more. **Clear Tracked Data** removes samples but keeps the tracker.

The preview supports Fit, Fit at most 100%, fixed zooms, pan, and a zoomed tracker detail. Show the selected tracker's motion path and set the ± frame window from 1–500.

Stabilization
~~~~~~~~~~~~~

Once at least one tracker has analyzed frames, enable Stabilize. Choose Position, Position + Rotation, or Position + Rotation + Scale; Both, Horizontal, or Vertical translation axes; and tracker assignments. Rotation needs a second tracker distinct from Position. Scale can use a separate baseline. **Reference Frame** is the source frame the result holds still. **Strength** appears as an animatable built-in property.
