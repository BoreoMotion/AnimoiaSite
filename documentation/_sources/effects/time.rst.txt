:tocdepth: 2

.. _effects-time:

Time
====

Changes which moment of the layer is shown. Every effect below is listed in the sidebar, so you can jump straight to one. Return to :doc:`../effects-reference` for stack behavior shared by all effects.

.. _effect-ghosts:

Ghosts
------

Layers time-offset copies into a trailing echo. Add it from **Effects > Time** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Its position in the stack matters because it changes which moment of the layer other effects see.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Echo Time (ms)
     - Number
     - Changes which moment of the layer feeds into the ghosts result.
   * - Number Of Echoes
     - Number
     - Sets how many trailing copies are drawn behind the current frame.
   * - Substeps
     - Number
     - Samples extra moments between each echo, smearing the trail into continuous motion blur rather than distinct copies.
   * - Starting Intensity
     - Number
     - Sets how bright the current frame is before the echoes are added on top.
   * - Decay
     - Number
     - Sets how quickly the processing lets go after the sound falls away.
   * - Echo Operator
     - Menu
     - Chooses how the echoes are combined: added for glowing light trails, screened, or simply layered.

.. _effect-stutter:

Frame Drop
----------

Quantizes the layer to a lower frame rate for stepped, choppy motion. Add it from **Effects > Time** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Its position in the stack matters because it changes which moment of the layer other effects see.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Frame Rate
     - Number
     - Sets the frame rate the layer is quantized to. The whole layer — its source, its keyframes, and its effects — is held on each step, so a low value gives the stepped look of footage shot at that rate no matter how fast the composition runs.

