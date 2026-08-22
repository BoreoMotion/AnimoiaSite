:tocdepth: 2

.. _effects-blur-sharpen:

Blur & Sharpen
==============

Softens or sharpens image detail. Every effect below is listed in the sidebar, so you can jump straight to one. Return to :doc:`../effects-reference` for stack behavior shared by all effects.

.. _effect-gaussian-blur:

Gaussian Blur
-------------

Softens or smears detail with gaussian blur. Add it from **Effects > Blur & Sharpen** by double-clicking it or dragging it onto a compatible layer.

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
   * - Blurriness
     - Number
     - Sets how strongly the layer is softened, blending each pixel with more of its neighbors so detail and edges progressively disappear.
   * - Repeat Edge Pixels
     - Toggle
     - Extends the outermost pixels beyond the layer edge instead of sampling transparency, which stops the edges from darkening or going soft.

.. _effect-lens-blur:

Camera Lens Blur
----------------

Softens or smears detail with camera lens blur. Add it from **Effects > Blur & Sharpen** by double-clicking it or dragging it onto a compatible layer.

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
   * - Focus Mode
     - Menu
     - Chooses where the sharp area sits: a radial focus around a center point, a linear band between two points, or an even blur across the whole layer.
   * - Blur Radius
     - Number
     - Sets how far out of focus the blurred areas fall, growing the size of each bokeh highlight.
   * - Aperture Blades
     - Number
     - Sets how many straight sides the simulated iris has, which is the shape out-of-focus highlights take. At ``0`` the iris stays perfectly round for circular bokeh; from ``3`` upward highlights become triangular, hexagonal, and so on.
   * - Blade Rotation
     - Number
     - Spins the polygonal iris, turning the orientation of every out-of-focus highlight. It has no visible result while **Aperture Blades** keeps the iris round.
   * - Blade Ratio
     - Number
     - Squeezes the iris along one axis, stretching round highlights into ovals for an anamorphic look.
   * - Highlight Bloom
     - Number
     - Makes bright highlights flare more strongly than surrounding tones, so small light sources bloom into pronounced bokeh discs instead of averaging away.
   * - Repeat Edge Pixels
     - Toggle
     - Extends the outermost pixels beyond the layer edge instead of sampling transparency, which stops the edges from darkening or going soft.
   * - Inner Focus
     - Number
     - Sets how large the sharp, in-focus middle stays before the image starts falling out of focus toward the edges.
   * - Center
     - 2D control
     - Moves the visual center or origin of the effect across the layer.
   * - Radius
     - 2D control
     - Changes how far the effect spreads outward from each affected pixel or point.
   * - Linear Start
     - 2D control
     - Places one end of the in-focus band used by the linear focus mode.
   * - Linear End
     - 2D control
     - Places the opposite end of the in-focus band, which sets the band’s direction and length.

.. _effect-blur-map:

Blur Map
--------

Softens or smears detail with blur map. Add it from **Effects > Blur & Sharpen** by double-clicking it or dragging it onto a compatible layer.

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
   * - Map Layer
     - Layer
     - Chooses the layer whose brightness decides where the blur becomes stronger and where the image stays sharp.
   * - Blur Source
     - Menu
     - Softens the source, blending each pixel with its neighbors so detail and edges fade out.
   * - Max Blur
     - Number
     - Softens the max, blending each pixel with its neighbors so detail and edges fade out.
   * - Invert Map
     - Toggle
     - Swaps the map’s bright and dark influence, so areas that were sharp become blurred and vice versa.
   * - Repeat Edge Pixels
     - Toggle
     - Extends the outermost pixels beyond the layer edge instead of sampling transparency, which stops the edges from darkening or going soft.

.. _effect-sharpen:

Sharpen
-------

Brings out edges and fine image detail. Add it from **Effects > Blur & Sharpen** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Amount
     - Number
     - Increases or reduces how strongly sharpen changes the layer.

.. _effect-unsharp-mask:

Unsharp Mask
------------

Brings out edges and fine image detail. Add it from **Effects > Blur & Sharpen** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Amount
     - Number
     - Increases or reduces how strongly unsharp mask changes the layer.
   * - Radius
     - Number
     - Changes how far the effect spreads outward from each affected pixel or point.
   * - Threshold
     - Number
     - Chooses which tonal values are affected; moving it changes where the effect begins to appear.
   * - Mode
     - Menu
     - Chooses the visual method used to build the result.
   * - Quality
     - Menu
     - Changes edge smoothness and fine detail; higher settings produce a cleaner result but preview more slowly.

.. _effect-detail-sharpen:

Detail
------

Brings out edges and fine image detail. Add it from **Effects > Blur & Sharpen** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Fine
     - Number
     - Raises or lowers the smallest, finest detail that detail affects.
   * - Medium
     - Number
     - Raises or lowers the medium-sized detail that detail affects.
   * - Coarse
     - Number
     - Raises or lowers the broad shapes and large detail that detail affects.
   * - Scale
     - Number
     - Makes the pattern or distortion features larger or smaller.
   * - Threshold
     - Number
     - Chooses which tonal values are affected; moving it changes where the effect begins to appear.
   * - Quality
     - Menu
     - Changes edge smoothness and fine detail; higher settings produce a cleaner result but preview more slowly.

.. _effect-cc-cross-blur:

Cross Blur
----------

Softens or smears detail with cross blur. Add it from **Effects > Blur & Sharpen** by double-clicking it or dragging it onto a compatible layer.

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
   * - Radius X
     - Number
     - Sets how far the image is blurred horizontally, independently of the vertical amount.
   * - Radius Y
     - Number
     - Sets how far the image is blurred vertically, independently of the horizontal amount.
   * - Transfer Mode
     - Menu
     - Chooses how the horizontal and vertical blur passes are combined back with the original image.
   * - Repeat Edge Pixels
     - Toggle
     - Extends the outermost pixels beyond the layer edge instead of sampling transparency, which stops the edges from darkening or going soft.

.. _effect-radial-blur:

Radial Blur
-----------

Softens or smears detail with radial blur. Add it from **Effects > Blur & Sharpen** by double-clicking it or dragging it onto a compatible layer.

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
   * - Type
     - Menu
     - Chooses the visual form radial blur takes.
   * - Amount
     - Number
     - Increases or reduces how strongly radial blur changes the layer.
   * - Center
     - 2D control
     - Moves the visual center or origin of the effect across the layer.
   * - Repeat Edge Pixels
     - Toggle
     - Extends the outermost pixels beyond the layer edge instead of sampling transparency, which stops the edges from darkening or going soft.

.. _effect-fast-box-blur:

Fast Box Blur
-------------

Softens or smears detail with fast box blur. Add it from **Effects > Blur & Sharpen** by double-clicking it or dragging it onto a compatible layer.

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
   * - Blur Radius
     - Number
     - Softens the radius, blending each pixel with its neighbors so detail and edges fade out.
   * - Blur Dimensions
     - Menu
     - Softens the dimensions, blending each pixel with its neighbors so detail and edges fade out.
   * - Repeat Edge Pixels
     - Toggle
     - Extends the outermost pixels beyond the layer edge instead of sampling transparency, which stops the edges from darkening or going soft.

.. _effect-directional-blur:

Directional Blur
----------------

Softens or smears detail with directional blur. Add it from **Effects > Blur & Sharpen** by double-clicking it or dragging it onto a compatible layer.

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
     - Number
     - Chooses the direction in which the effect travels, stretches, or faces.
   * - Blur Length
     - Number
     - Softens the length, blending each pixel with its neighbors so detail and edges fade out.
   * - Repeat Edge Pixels
     - Toggle
     - Extends the outermost pixels beyond the layer edge instead of sampling transparency, which stops the edges from darkening or going soft.

.. _effect-channel-blur:

Channel Blur
------------

Softens or smears detail with channel blur. Add it from **Effects > Blur & Sharpen** by double-clicking it or dragging it onto a compatible layer.

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
   * - Red Blurriness
     - Number
     - Softens the red, blending each pixel with its neighbors so detail and edges fade out.
   * - Green Blurriness
     - Number
     - Softens the green, blending each pixel with its neighbors so detail and edges fade out.
   * - Blue Blurriness
     - Number
     - Softens the blue, blending each pixel with its neighbors so detail and edges fade out.
   * - Alpha Blurriness
     - Number
     - Softens the alpha, blending each pixel with its neighbors so detail and edges fade out.
   * - Repeat Edge Pixels
     - Toggle
     - Extends the outermost pixels beyond the layer edge instead of sampling transparency, which stops the edges from darkening or going soft.
   * - Blur Dimensions
     - Menu
     - Softens the dimensions, blending each pixel with its neighbors so detail and edges fade out.

.. _effect-zoom-blur:

Zoom Blur
---------

Softens or smears detail with zoom blur. Add it from **Effects > Blur & Sharpen** by double-clicking it or dragging it onto a compatible layer.

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
   * - Amount
     - Number
     - Increases or reduces how strongly zoom blur changes the layer.
   * - Type
     - Menu
     - Chooses the visual form zoom blur takes.
   * - Center
     - 2D control
     - Moves the visual center or origin of the effect across the layer.
   * - Repeat Edge Pixels
     - Toggle
     - Extends the outermost pixels beyond the layer edge instead of sampling transparency, which stops the edges from darkening or going soft.

