:tocdepth: 2

.. _effects-mask:

Mask
====

Uses a drawn path to limit where a layer is visible. Every effect below is listed in the sidebar, so you can jump straight to one. Return to :doc:`../effects-reference` for stack behavior shared by all effects.

.. _effect-mask:

Mask
----

Uses a drawn path to reveal, hide, or soften selected parts of a layer. Select a layer, choose the **Pen tool** (``G``), and draw in the viewer. Drawing on a selected non-shape layer creates a mask; selecting an existing mask path lets you continue editing it. See :ref:`masks-and-paths`.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Mask Path
     - Path
     - Defines the boundary that separates the visible and hidden parts of the layer.
   * - Mode
     - Menu
     - Chooses whether the path reveals its interior, cuts its interior away, or temporarily leaves the layer unchanged.
   * - Mask Feather
     - Number
     - Blurs the mask boundary into a wider, softer transition.
   * - Mask Opacity
     - Number
     - Blends the mask influence from fully transparent to fully applied.
   * - Mask Expansion
     - Number
     - Moves the mask boundary outward to reveal more or inward to reveal less.
   * - Inverted
     - Toggle
     - Swaps the inside and outside of the mask.

.. _effect-stencil:

Stencil
-------

Uses another layer as a matte, so that layer’s channel decides where this one stays visible. Add it from **Effects > Mask** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Stencil Layer
     - Layer
     - Chooses the layer used as the matte. Its shape decides where this layer survives, and its own opacity is taken into account, so fading the stencil layer fades the cut.
   * - Stencil Channel
     - Menu
     - Chooses which part of the stencil layer is read. **Alpha** treats its transparency as the matte, **Luminance** uses its brightness, and the individual **Red**, **Green**, and **Blue** options let one color channel carry the matte.
   * - Invert
     - Toggle
     - Swaps which side is kept, so the layer shows exactly where the stencil used to hide it.
   * - Blend With Original
     - Number
     - Fades the matte back toward the untouched layer, so at the high end the stencil stops cutting anything away.

