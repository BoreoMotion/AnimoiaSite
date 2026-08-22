:tocdepth: 2

.. _effects-reference:

Effects reference
=================

Use the right-side **Effects** browser to find an effect, then double-click it or drag it onto a compatible selected layer. Effects render from the top of the stack downward. Drag effect headers to reorder them, and use the header menu to rename, copy, duplicate, reset, disable, lock, or remove an effect. See :ref:`animating-properties` for keyframes and :ref:`animation-modifiers` for procedural animation.

Text effects need a text layer, Audio effects need an audible layer, and Paths effects need editable shape geometry. A few operators never appear in the browser at all because a viewer tool creates them: see :ref:`masks-and-paths` and :ref:`puppet-tool`.

Categories
----------

.. toctree::
   :maxdepth: 2

   effects/blur-sharpen
   effects/color
   effects/stylize
   effects/distort
   effects/lighting
   effects/generate
   effects/keying
   effects/transition
   effects/text
   effects/time
   effects/audio
   effects/paths
   effects/mask

.. list-table:: What each category does
   :header-rows: 1
   :widths: 26 12 62

   * - Category
     - Effects
     - Purpose
   * - :doc:`effects/blur-sharpen`
     - 12
     - Softens or sharpens image detail.
   * - :doc:`effects/color`
     - 16
     - Adjusts tone, contrast, and color balance.
   * - :doc:`effects/stylize`
     - 17
     - Turns the image into a graphic or textured treatment.
   * - :doc:`effects/distort`
     - 17
     - Warps, displaces, or reshapes the image geometry.
   * - :doc:`effects/lighting`
     - 5
     - Adds light, glow, and shading.
   * - :doc:`effects/generate`
     - 4
     - Draws new imagery that can be blended over the layer.
   * - :doc:`effects/keying`
     - 2
     - Removes colors or tones to create transparency.
   * - :doc:`effects/transition`
     - 17
     - Reveals or removes a layer over time.
   * - :doc:`effects/text`
     - 9
     - Animates the characters of a text layer.
   * - :doc:`effects/time`
     - 2
     - Changes which moment of the layer is shown.
   * - :doc:`effects/audio`
     - 7
     - Processes or visualizes a layer’s sound.
   * - :doc:`effects/paths`
     - 6
     - Reshapes editable vector geometry before it is filled or stroked.
   * - :doc:`effects/mask`
     - 2
     - Uses a drawn path to limit where a layer is visible.

.. _shared-effect-behavior:

Shared effect behavior
----------------------

Layer, mask, and audio references
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A **Layer** control chooses another composition layer to drive the effect. A **Mask** control chooses a mask on the same layer, which is how generated effects are drawn along a path — see :ref:`masks-and-paths`. Audio references choose the layer whose sound drives or receives processing.

Effect stack groups
~~~~~~~~~~~~~~~~~~~

Animoia applies path operations first, then text animation, then visual effects, then audio processing. Moving an effect inside its group changes the order in which its look is combined with its neighbors. Lock an effect to protect its settings and its stack position.

.. seealso::

   :ref:`properties-and-animation` for keyframing effect properties, and :ref:`keyboard-shortcuts` for the keys that apply, copy, and remove effects.
