:tocdepth: 2

.. _effects-keying:

Keying
======

Removes colors or tones to create transparency. Every effect below is listed in the sidebar, so you can jump straight to one. Return to :doc:`../effects-reference` for stack behavior shared by all effects.

.. _effect-chroma-key:

Chroma Key
----------

Makes selected colors or tones transparent with chroma key. Add it from **Effects > Keying** by double-clicking it or dragging it onto a compatible layer.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Key Color
     - Color
     - Sets the color used for the key portion of the result.
   * - Screen Gain
     - Number
     - Raises or lowers the brightness of this part of the image.
   * - Screen Balance
     - Number
     - Balances how the key judges the screen color against the other two channels. Adjust it when a green screen keys cleanly but a blue one does not, or vice versa.
   * - Clip Black
     - Number
     - Raises the level below which the matte becomes fully transparent, clearing residual haze out of the keyed-out area.
   * - Clip White
     - Number
     - Lowers the level above which the matte becomes fully opaque, closing up thin patches in the subject.
   * - Spill Suppression
     - Number
     - Removes the screen color that has bounced onto the subject, taking the green rim off hair and shoulders.
   * - Despill Bias
     - Number
     - Steers what the removed spill is replaced with, so de-spilled skin tones stay natural instead of turning magenta.
   * - Matte Shrink/Grow
     - Number
     - Shrinks the matte inward to cut away a fringe, or grows it outward to recover an edge that was eaten away.
   * - Matte Softness
     - Number
     - Blurs the matte edge so the subject blends into the new background instead of looking cut out.
   * - View
     - Menu
     - Switches the viewer between the final composite and the matte itself, which is how you check a key for holes and haze.

.. _effect-alpha-offset:

Alpha Offset
------------

Makes selected colors or tones transparent with alpha offset. Add it from **Effects > Keying** by double-clicking it or dragging it onto a compatible layer.

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
   * - Choke Matte
     - Number
     - Grows or shrinks the matte, pulling the edge in to cut off fringing or pushing it out to recover a lost edge.

