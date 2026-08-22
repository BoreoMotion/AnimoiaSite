:tocdepth: 2

.. _effects-distort:

Distort
=======

Warps, displaces, or reshapes the image geometry. Every effect below is listed in the sidebar, so you can jump straight to one. Return to :doc:`../effects-reference` for stack behavior shared by all effects.

.. _effect-bulge:

Bulge
-----

Warps the image with bulge. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Horizontal Radius
     - Number
     - Sets how wide the affected area is, so the lens can be stretched into an oval rather than a circle.
   * - Vertical Radius
     - Number
     - Sets how tall the affected area is.
   * - Bulge Center
     - 2D control
     - Moves the bulge center in the viewer, changing where bulge is centered or begins.
   * - Bulge Height
     - Number
     - Sets how strongly the lens pushes out. Positive values swell the image toward the viewer, negative values dent it inward, and ``0`` leaves it flat.
   * - Taper Radius
     - Number
     - Adds a band around the bulge where the distortion eases back to the untouched image, blending the edge of the lens into its surroundings instead of stopping abruptly.
   * - Roundness
     - Number
     - Shapes the profile of the bulge. At the high end it is a true spherical cap, the rounded lens you expect from a magnifier; lowering it flattens the profile into a sharper conical peak.
   * - Antialiasing
     - Menu
     - Trades edge smoothness against speed on the stretched pixels inside the bulge.
   * - Pin All Edges
     - Toggle
     - Locks the layer border in place so the bulge cannot drag the outer edges inward and leave transparent gaps.

.. _effect-bend:

Bend
----

Warps the image with bend. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Bend
     - Number
     - Sets how far the layer is curved. Positive and negative values bow it in opposite directions.
   * - Start
     - 2D control
     - Moves start in the viewer, changing the placement or direction of bend.
   * - End
     - 2D control
     - Moves end in the viewer, changing the placement or direction of bend.
   * - Render Prestart
     - Menu
     - Chooses what fills the area the bend vacates before the layer starts curving.
   * - Distort
     - Menu
     - Chooses whether the bend also stretches the artwork or simply repositions it along the curve.

.. _effect-fisheye:

Fisheye
-------

Warps the image with fisheye. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Center
     - 2D control
     - Moves the visual center or origin of the effect across the layer.
   * - Size
     - Number
     - Changes the overall scale of the generated detail or affected area.
   * - Convergence
     - Number
     - Shifts where the lens curvature is strongest, moving the bulge of the fisheye toward or away from the center.

.. _effect-mosaic:

Replicate
---------

Tiles the layer into a repeating grid of shrunken copies. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Scale
     - Number
     - Sets the size of each copy as a percentage of the frame. Lowering it shrinks the layer and fills the frame with a denser grid of repeats.
   * - Center
     - 2D control
     - Moves the point the tiling is aligned to, sliding the whole grid of copies across the frame.
   * - Blend w. Original
     - Number
     - Fades the tiled result back toward the original single image.

.. _effect-warp:

Warp
----

Warps the image with warp. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Warp Style
     - Menu
     - Chooses the visual form warp takes.
   * - Warp Axis
     - Menu
     - Chooses whether the warp shape is applied horizontally or vertically.
   * - Bend
     - Number
     - Sets how strongly the chosen warp shape is applied. ``0`` leaves the layer flat.
   * - Horizontal Distortion
     - Number
     - Leans the warped shape sideways, skewing the effect horizontally.
   * - Vertical Distortion
     - Number
     - Leans the warped shape up or down, skewing the effect vertically.

.. _effect-mirror:

Mirror
------

Warps the image with mirror. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Reflection Center
     - 2D control
     - Moves the reflection center in the viewer, changing where mirror is centered or begins.
   * - Reflection Angle
     - Number
     - Rotates the mirror line, changing which part of the layer is reflected and in which direction.

.. _effect-basic-3d:

Basic 3D
--------

Warps the image with basic 3d. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Pitch
     - Number
     - Tips the layer forward or back around its horizontal axis, as if hinged along a line across the frame.
   * - Yaw
     - Number
     - Turns the layer left or right around its vertical axis, so one edge comes toward the viewer.
   * - Roll
     - Number
     - Spins the layer in the plane of the screen, like ordinary rotation.
   * - Perspective
     - Number
     - Sets how strong the foreshortening looks. High values exaggerate the near edge for a wide-angle feel; low values flatten it out.

.. _effect-corner-pin:

Corner Pin
----------

Warps the image with corner pin. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Upper Left
     - 2D control
     - Moves upper left in the viewer, changing the placement or direction of corner pin.
   * - Upper Right
     - 2D control
     - Moves upper right in the viewer, changing the placement or direction of corner pin.
   * - Lower Left
     - 2D control
     - Moves lower left in the viewer, changing the placement or direction of corner pin.
   * - Lower Right
     - 2D control
     - Moves lower right in the viewer, changing the placement or direction of corner pin.

.. _effect-ripple:

Ripple
------

Warps the image with ripple. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Radius
     - Number
     - Changes how far the effect spreads outward from each affected pixel or point.
   * - Center
     - 2D control
     - Moves the visual center or origin of the effect across the layer.
   * - Type of Conversion
     - Menu
     - Chooses the visual form ripple takes.
   * - Wave Width
     - Number
     - Sets the horizontal size of the wave.
   * - Wave Height
     - Number
     - Sets the vertical size of the wave.
   * - Ripple Phase
     - Number
     - Slides the rings outward or inward through their cycle, which is what animates the ripple traveling.

.. _effect-wave-distort:

Wave Warp
---------

Warps the image with wave warp. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Wave Type
     - Menu
     - Chooses the wave profile. **Sine** rolls smoothly, **Triangle** and **Sawtooth** move in straight runs, **Square** and **Uneven Squares** snap between extremes, **Circle** and **Semicircle** bow in arcs, and **Noise** and **Smooth Noise** replace the regular wave with a random one.
   * - Wave Height
     - Number
     - Sets how far the image is pushed sideways at each wave crest.
   * - Wave Width
     - Number
     - Sets the distance from one crest to the next, so smaller values pack in more, tighter waves.
   * - Direction
     - Number
     - Rotates the axis the waves travel along.
   * - Pinning
     - Menu
     - Holds chosen layer edges still so the waves cannot drag them inward and expose transparency.
   * - Phase
     - Number
     - Slides the wave through its cycle, and is the only thing that moves it — there is no speed property, so the warp stays still until you keyframe this.

.. _effect-turbulent-displace:

Turbulence
----------

Warps the image with turbulence. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Amount
     - Number
     - Increases or reduces how strongly turbulence changes the layer.
   * - Size
     - Number
     - Changes the overall scale of the generated detail or affected area.
   * - Aspect Ratio
     - Number
     - Stretches the noise field horizontally, so the turbulence smears into wide horizontal streaks instead of even blobs. ``1`` keeps it uniform.
   * - Offset (Turbulence)
     - 2D control
     - Pans the noise field across the layer. It moves the pattern rather than the image, so sliding it makes the distortion drift.
   * - Complexity
     - Number
     - Layers additional finer octaves of noise on top of the base pattern, adding small-scale detail to the churn.
   * - Evolution
     - Number
     - Changes the internal arrangement of the pattern, producing animation without simply moving it.
   * - Random Seed
     - Number
     - Picks a different random noise field, changing the pattern of the distortion without changing its scale or strength.
   * - Pinning
     - Menu
     - Holds chosen layer edges still so the displacement cannot pull them inward and expose transparency.

.. _effect-displacement-map:

Displacement Map
----------------

Warps the image with displacement map. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Map Layer
     - Layer
     - Chooses the layer whose brightness decides where the blur becomes stronger and where the image stays sharp.
   * - Horizontal Source
     - Menu
     - Chooses which channel of the map layer pushes pixels sideways.
   * - Vertical Source
     - Menu
     - Chooses which channel of the map layer pushes pixels up and down.
   * - Max Displacement
     - 2D control
     - Moves max displacement in the viewer, changing the placement or direction of displacement map.
   * - Wrap Pixels
     - Toggle
     - Turns wrap pixels on or off.
   * - Parallax
     - Toggle
     - Turns parallax on or off.
   * - Object Buffer
     - Number
     - Sets the map value that counts as no displacement, so tones above it push one way and tones below push the other.
   * - Quality
     - Menu
     - Changes edge smoothness and fine detail; higher settings produce a cleaner result but preview more slowly.

.. _effect-tile-edges:

Extend
------

Grows the frame past its edges by repeating or mirroring the border pixels. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Expand Right
     - Number
     - Extends the image past its right edge by this many pixels, filling the new area from the border pixels.
   * - Expand Left
     - Number
     - Extends the image past its left edge by this many pixels.
   * - Expand Down
     - Number
     - Extends the image below its bottom edge by this many pixels.
   * - Expand Up
     - Number
     - Extends the image above its top edge by this many pixels.
   * - Tiling
     - Menu
     - Chooses how the added area is filled. **Repeat** copies the image straight across, while the **Mirror** options flip each copy so it meets its neighbor seamlessly.
   * - Blend Borders
     - Number
     - Softens the seams where the repeated copies meet, fading them into one another instead of butting up sharply.

.. _effect-lens-distortion:

Lens Distortion
---------------

Warps the image with lens distortion. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Distortion
     - Number
     - Bends the image the way a lens does: positive values bow it outward like a wide angle, negative values pinch it inward.
   * - FOV Orientation
     - Menu
     - Rotates the fov around its center.
   * - View Center
     - 2D control
     - Moves the view center in the viewer, changing where lens distortion is centered or begins.

.. _effect-transform-fx:

Transform
---------

Warps the image with transform. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Anchor Point
     - 2D control
     - Moves the anchor point in the viewer, changing where transform is centered or begins.
   * - Position
     - 2D control
     - Moves the effect’s focal point or generated element across the layer.
   * - Uniform Scale
     - Toggle
     - Turns uniform scale on or off.
   * - Scale
     - 2D control
     - Makes the pattern or distortion features larger or smaller.
   * - Skew
     - Number
     - Slants the layer, sliding one side against the other so squares become parallelograms.
   * - Skew Axis
     - Number
     - Rotates the axis the skew slides along.
   * - Rotation
     - Number
     - Rotates the result around its center.
   * - Opacity
     - Number
     - Changes how strongly the effect is visible without changing its shape.

.. _effect-puppet:

Puppet
------

Bends artwork around animated pins as if it were a flexible surface. Select the **Puppet Pin tool** and place the first pin on the layer; Animoia creates the Puppet effect and its mesh automatically.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Expansion
     - Number
     - Pushes the affected boundary outward or pulls it inward, before any edge softening is applied.
   * - Triangles
     - Number
     - Sets how many triangles the mesh is built from. More triangles bend more smoothly and follow fine detail better, at the cost of speed.
   * - Smoothness
     - Number
     - Sets how far each pin’s influence spreads. Low values deform the mesh stiffly right around the pin; high values let a single pin bend a broad area softly.
   * - Mesh Data
     - Path
     - Shapes the path used to draw or bound puppet.

.. _effect-mesh-warp:

Mesh Warp
---------

Lays a grid of draggable, curve-handled control points over the layer and bends the image through them. Add it from **Effects > Distort** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Rows
     - Number
     - Sets how many horizontal lines of control points the grid has. Changing it rebuilds the grid and resamples the current warp onto the new points, which is why it cannot be keyframed.
   * - Columns
     - Number
     - Sets how many vertical lines of control points the grid has. Like **Rows**, it rebuilds the grid rather than animating.
   * - Quality
     - Number
     - Sets how finely each grid cell is subdivided when it is drawn. Low values leave curved cells looking flat and angular; raising it renders the curvature faithfully at the cost of speed.
   * - Distortion
     - Number
     - Scales the whole warp at once, from ``0`` for the undistorted image up to the full pose you shaped. Negative values push every point the opposite way, and this is the property to keyframe to dial a warp in and out.
   * - Mesh Data
     - Path
     - Shapes the path used to draw or bound mesh warp.

