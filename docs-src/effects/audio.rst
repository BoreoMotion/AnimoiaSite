:tocdepth: 2

.. _effects-audio:

Audio
=====

Processes or visualizes a layer’s sound. Every effect below is listed in the sidebar, so you can jump straight to one. Return to :doc:`../effects-reference` for stack behavior shared by all effects.

.. _effect-audio-reverb:

Reverb
------

Shapes the layer’s sound with reverb. Add it from **Effects > Audio** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Apply this only to a layer with audio. The result follows the effect-stack order.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Mix
     - Number
     - Balances the processed result against the original image.
   * - Room Size
     - Number
     - Sets how large the simulated space sounds, from a tight booth to a long hall with a slow tail.
   * - Decay (seconds)
     - Number
     - Sets how quickly the processing lets go after the sound falls away.
   * - Damping
     - Number
     - Sets how quickly the reflections are absorbed. High values sound like soft furnishings swallowing the tail; low values like bare hard walls.
   * - Pre-delay (milliseconds)
     - Number
     - Changes which moment of the layer feeds into the reverb result.

.. _effect-audio-delay:

Delay
-----

Shapes the layer’s sound with delay. Add it from **Effects > Audio** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Apply this only to a layer with audio. The result follows the effect-stack order.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Delay Time (milliseconds)
     - Number
     - Changes which moment of the layer feeds into the delay result.
   * - Feedback
     - Number
     - Sets how much of each echo is fed back in to make the next one, which is what turns a single slap into a long repeating decay.
   * - Mix
     - Number
     - Balances the processed result against the original image.
   * - Stereo Offset
     - Number
     - Shifts the echoes toward one speaker while the dry sound stays put, spreading the repeats across the stereo field.

.. _effect-audio-pitch:

Pitch
-----

Shapes the layer’s sound with pitch. Add it from **Effects > Audio** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Apply this only to a layer with audio. The result follows the effect-stack order.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Pitch (semitones)
     - Number
     - Shifts the pitch up or down in semitones without changing the playback speed. ``12`` is one octave up.
   * - High Quality
     - Toggle
     - Turns high quality on or off.

.. _effect-audio-bitcrusher:

Bitcrusher
----------

Shapes the layer’s sound with bitcrusher. Add it from **Effects > Audio** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Apply this only to a layer with audio. The result follows the effect-stack order.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Bit Depth
     - Number
     - Sets how many bits each sample is reduced to. Low values add the crunchy quantization noise of cheap digital audio.
   * - Sample Rate Reduction
     - Number
     - Sets how quickly bitcrusher evolves or repeats over time.
   * - Mix
     - Number
     - Balances the processed result against the original image.

.. _effect-audio-distortion:

Distortion
----------

Shapes the layer’s sound with distortion. Add it from **Effects > Audio** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Apply this only to a layer with audio. The result follows the effect-stack order.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Drive
     - Number
     - Sets how hard the signal is pushed into clipping, from mild warmth to full fuzz.
   * - Tone
     - Number
     - Filters the distorted signal, from dark and muffled at the low end to bright and biting at the high end.
   * - Output Gain (dB)
     - Number
     - Raises or lowers the audible level of this part of the signal.
   * - Mix
     - Number
     - Balances the processed result against the original image.

.. _effect-audio-pan:

Pan
---

Shapes the layer’s sound with pan. Add it from **Effects > Audio** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Apply this only to a layer with audio. The result follows the effect-stack order.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Left/Right Pan
     - Number
     - Places the sound in the stereo field, from fully left through center to fully right.
   * - Stereo Width
     - Number
     - Sets the horizontal size of the stereo.

.. _effect-audio-bass-treble:

Bass & Treble
-------------

Shapes the layer’s sound with bass & treble. Add it from **Effects > Audio** by double-clicking it or dragging it onto a compatible layer.

.. note::

   Apply this only to a layer with audio. The result follows the effect-stack order.

.. list-table:: Properties
   :header-rows: 1
   :widths: 24 18 58
   :class: effect-properties

   * - Name
     - Control
     - Visual or audible result
   * - Bass (dB)
     - Number
     - Boosts or cuts the low frequencies in decibels.
   * - Treble (dB)
     - Number
     - Boosts or cuts the high frequencies in decibels.
   * - Output Gain (dB)
     - Number
     - Raises or lowers the audible level of this part of the signal.

