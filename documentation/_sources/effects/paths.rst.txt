:tocdepth: 2

.. _effects-paths:

Paths
=====

Reshapes editable vector geometry before it is filled or stroked. Every effect below is listed in the sidebar, so you can jump straight to one. Return to :doc:`../effects-reference` for stack behavior shared by all effects.

.. _effect-inflate:

Inflate
-------

Pushes a path outward into a rounder shape or pulls it inward into spikes. Add it from **Effects > Paths** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Apply this only to editable shape geometry. The changed path is then filled and stroked by the shape layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Amount
     - Number
     - Pushes the outline outward into a rounder, fatter shape at positive values and pulls it inward at negative ones. Past the point where every handle meets the center, it overshoots into long thin spikes.

.. _effect-offset-path:

Offset Path
-----------

Creates expanded or contracted copies of a path. Add it from **Effects > Paths** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Apply this only to editable shape geometry. The changed path is then filled and stroked by the shape layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Amount
     - Number
     - Moves the outline outward by this distance, or inward when negative, growing or shrinking the shape while keeping its form.
   * - Copies
     - Number
     - Draws this many concentric outlines, each one stepped a further **Amount** away, as contours of a single compound shape.
   * - Copy Offset
     - Number
     - Renumbers the copies so the set starts somewhere other than the first step. ``-1`` starts it on the original outline, and lower values walk the whole set inward.
   * - Miter Limit
     - Number
     - Caps how far a sharp corner is allowed to spike when the outline is pushed out, exactly like a stroke miter limit.
   * - Union
     - Toggle
     - Cleans up the self-crossings a large offset folds into the outline, which is what stops a stroke drawn on it from sprouting spurs.

.. _effect-swiggle:

Swiggle
-------

Displaces a path with smooth random noise for a hand-drawn, wobbling outline. Add it from **Effects > Paths** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Apply this only to editable shape geometry. The changed path is then filled and stroked by the shape layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Amount
     - Number
     - Sets how far the outline is pushed off its original course at the peaks of the noise. Negative values displace it the other way.
   * - Detail
     - Number
     - Sets how many wobbles appear along the outline: low values give a few long lazy bends, high values a rapid ripple.
   * - Phase
     - Number
     - Slides the noise along its own axis, reshaping the wobble without moving the path. This is a static pose rather than a speed, so keyframe or wiggle it to make the outline crawl.
   * - Seed
     - Number
     - Picks a different random noise field, giving a completely different wobble at the same settings.
   * - Corner Points
     - Toggle
     - Keeps the displaced points as sharp corners instead of smoothing them into curves, for a jagged rather than flowing outline.

.. _effect-wave-path:

Wave
----

Bends a path into a regular wave running along its outline. Add it from **Effects > Paths** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Apply this only to editable shape geometry. The changed path is then filled and stroked by the shape layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Amount
     - Number
     - Sets how far the outline swings away from its original course at each wave crest. Negative values start the wave in the opposite direction.
   * - Wavelength
     - Number
     - Sets the distance along the outline from one crest to the next, so smaller values pack in more waves. On a closed shape it snaps to a whole number of waves per lap so the wave meets itself cleanly.
   * - Shape
     - Menu
     - Chooses the wave profile: **Sine** rolls smoothly, **Triangle** rises and falls in straight runs, **Square** steps between two extremes, and **Sawtooth** ramps up then drops.
   * - Phase
     - Number
     - Slides the wave along the outline, which is what animates it traveling around the shape.
   * - Corner Points
     - Toggle
     - Forces the wave points to stay sharp corners. Sine is otherwise smoothed back into curves; the other shapes are always faceted.

.. _effect-twist:

Twist
-----

Reshapes editable vector paths with twist before they are filled or stroked. Add it from **Effects > Paths** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Apply this only to editable shape geometry. The changed path is then filled and stroked by the shape layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Angle
     - Number
     - Rotates the direction of the effect around the layer.
   * - Center
     - 2D control
     - Moves the visual center or origin of the effect across the layer.

.. _effect-round-corners:

Round Corners
-------------

Turns sharp path corners into smooth curves. Add it from **Effects > Paths** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Apply this only to editable shape geometry. The changed path is then filled and stroked by the shape layer.

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

