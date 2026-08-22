.. _user-guide:

Animoia user guide
==================

Getting around
--------------

Workspace overview
~~~~~~~~~~~~~~~~~~

Animoia is a desktop motion-graphics compositor for Windows and Linux. The toolbar sits at the top, Project and Layer share the left panel, the Composition viewer is in the center, inspector tools sit on the right, and the Timeline runs across the bottom. Drag the separators to resize panels; panel sizes persist for your next session.

.. _fx-console:

FX Console
~~~~~~~~~~

The FX Console is a keyboard-first launcher covering effects, presets, and commands in one search field. Open it, type a few characters, and press ``Enter`` to apply whatever is highlighted — it is the fastest route to an effect whose name you know but whose category you would have to hunt for.

What it searches
^^^^^^^^^^^^^^^^

- **Effects** — every effect in the Effects panel.
- **Presets** — your saved effect presets, from the watched presets folder.
- **Commands** — the same ground as the File menu, the layer right-click menu, and the viewport view toggles: new and open project, save, undo and redo, duplicate, group, lock, alignment, flips, snapping, rulers, guides, and tool selection among them.

Matching and ranking
^^^^^^^^^^^^^^^^^^^^

Because ``Enter`` applies the highlighted row, ranking matters more here than in the browsable Effects tree: the effect you meant has to be first after two or three keystrokes. Matches are scored by how they matched, best first:

.. list-table::
   :header-rows: 1
   :widths: 26 74

   * - Match type
     - Example
   * - Exact name
     - ``gaussian blur`` → *Gaussian Blur*
   * - Name prefix
     - ``gau`` → *Gaussian Blur*
   * - Word start
     - ``blur`` → *Gaussian Blur*, *Camera Lens Blur*
   * - Substring
     - ``ussian`` → *Gaussian Blur*
   * - Initials
     - ``clb`` → *Camera Lens Blur*
   * - Subsequence
     - ``gblr`` → *Gaussian Blur*
   * - Category only
     - ``sharpen`` lists the Blur & Sharpen effects, but always below anything actually named "…Sharpen"

Subsequence matching also weighs how spread out the match was, so a tight match ranks above a scattered one. Recently used items are remembered and surface first, which means the effects you actually reach for get faster the more you use them.

Unavailable commands
^^^^^^^^^^^^^^^^^^^^

A command that cannot run right now — one needing a selection when nothing is selected, for instance — is shown dimmed rather than hidden. A command that silently disappears is much harder to learn than one you can see is temporarily unavailable, and the dimmed row tells you the command exists and what it needs.

``Escape`` clears the query first, then closes the console on a second press.

.. _creating-a-project:

Project and file workflow
-------------------------

New project
~~~~~~~~~~~

Choose **File > New** or use the configured **New project** shortcut. Animoia asks before replacing the current project because unsaved work will be lost. A new project contains one empty 1920×1080, 30 fps, 10-second composition named ``Comp 1``.

Open project
~~~~~~~~~~~~

Choose **File > Open project file** and select a ``.moia`` file. Ordinary media can be stored as file references to keep projects small; generated sequences and split SVG assets remain embedded.

.. note::

   ``.moia`` replaces the older ``.brisk`` extension. Where a ``.brisk`` was plain JSON that any text editor could read, a ``.moia`` is compressed and encrypted, so it contains no readable strings and is not meant to be edited by hand. Make changes in Animoia and treat the file as opaque.

   A tampered or truncated ``.moia`` fails loudly when opened rather than yielding half a document, so a partial file will not quietly load as a damaged project.

.. warning::

   The ``.moia`` container is designed to stop *casual* inspection — reading a project in a text editor, running ``strings`` or ``grep`` over it, or exposing the absolute asset paths it contains (which include your user name and folder layout) in a shared folder or a support-ticket attachment.

   It is not a guarantee of secrecy. Animoia opens projects without a password prompt, which means the key comes from the application itself and can be recovered by a determined person. Never treat a ``.moia`` as a safe place for passwords, tokens, or anything whose disclosure would be genuinely harmful.

.. warning::

   If referenced media has moved, the project still opens but that asset remains offline until you use **Reimport from File…**. A corrupt or malformed file doesn't replace the project already open.

Relinking moved media
^^^^^^^^^^^^^^^^^^^^^

When you relink one offline asset, Animoia looks at the others that are still missing. If they used to sit in the same folder as the file you just picked, it offers to relink that whole group in one step instead of asking you to hunt down each file individually. This is the fast way back from a project whose media folder was moved or renamed wholesale.

Save, Save As, and Save Increment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Save project file** overwrites the current file on disk or asks for a destination the first time. **Save As…** always asks for a new destination. **Save Increment** appears after the project has a filename and writes a numbered copy, then continues work in that copy. The status bar adds ``*`` after the filename while changes are unsaved.

Pack Project
~~~~~~~~~~~~

**File > Pack Project** writes a single ``.zip`` containing everything the project needs, and is the right way to archive a project or hand it to someone else.

Everything sits inside a single top-level folder, so unzipping never scatters files into whatever directory you happened to be in:

.. code-block:: text

   <name>/
     <name>.moia    fully self-contained project, all media embedded
     assets/        the original media, browsable

The duplication is deliberate. The ``.moia`` is the only part needed to reopen the project — it embeds every asset, so it opens on any machine with no media hunting and no offline layers. ``assets/`` exists so a person or another application can actually read the source media, which a packed project would otherwise bury.

Names inside ``assets/`` are made safe for any filesystem and de-duplicated, so two different assets that happen to share a name both survive with distinct filenames.

.. note::

   Image sequences are not written to ``assets/``, because Animoia stores them as every frame concatenated into a single blob rather than as separate files. The frames remain inside the ``.moia``, which is what actually restores the project.

Only the ``.moia`` is compressed. The media in ``assets/`` is already in compressed formats, so recompressing it costs time for almost no saving.

.. tip::

   Packing is the most reliable way to hand a project over, because it does not depend on file references at all. A plain ``.moia`` may still point at media on your own disk; a packed project never does.

Reduce Project and Remove Unused
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Two Project-panel commands trim a project that has grown heavier than the work in it:

- **Reduce Project** keeps the compositions you have selected and everything they depend on, then discards the rest. Because it follows nesting, a composition used only inside a composition you kept is also kept.
- **Remove Unused** discards footage that no composition references at all.

Both report what they removed, and both are a single undo step.

Autosave and closing
~~~~~~~~~~~~~~~~~~~~

Animoia restores its autosaved session during startup, and **File > Restore Last Session** brings that autosave back on demand — useful if you started something new and want the previous session again. Closing a project with unsaved changes offers **Save**, **Don't Save**, and **Cancel**. ``Enter`` chooses Save; ``Escape`` cancels closing. If a render is active, Animoia instead offers **Keep Rendering** and **Stop and Close**; there is deliberately no destructive Enter shortcut.

.. _gpu-frame-cache:

GPU frame cache readout
~~~~~~~~~~~~~~~~~~~~~~~

The File menu carries a live meter showing how much of the GPU frame-cache budget is in use, as ``used / budget`` in gigabytes. Both numbers come from the cache that actually performs eviction, so the readout reflects real pressure rather than an estimate: when it sits near the budget, cached frames are being evicted and previews will re-render more often. Raise or lower the budget itself under :ref:`Performance preferences <prefs-performance>`.

Project panel
-------------

Import media
~~~~~~~~~~~~

Click Import, double-click empty Project-panel space, right-click empty space and choose **Import Files…**, drag files into the panel, or drop files on the Timeline.

* Numbered stills such as ``shot_0001.png`` are grouped as one image-sequence video.
* SVGs stay vector-quality. Layered SVGs can be prepared as a composition or imported flat when that choice is offered.
* GIF/WebP animation is converted to an image sequence.
* Images, video, and audio become reusable project assets.

Importing is a background task. Its progress appears in the status bar. Project editing is locked during playback, but Project search remains available.

Search and organize
~~~~~~~~~~~~~~~~~~~

Search matches names and useful metadata: type, dimensions, duration, frame rate, sequence status, and audio presence. Use **New Folder** to collect assets and compositions. Drag rows into an expanded folder, onto a folder row, or back to root space. Deleting a folder moves its contents to the project root rather than deleting them.

Click a row to select it. ``Shift`` selects a range and ``Ctrl`` toggles an item. Drag empty space for a marquee. Click a row's color tag to choose a label color. Hover a composition or asset for a thumbnail and metadata tooltip.

Project item actions
~~~~~~~~~~~~~~~~~~~~

Right-click a row for the actions that apply to it:

* **Rename** edits the row name.
* **Edit** opens Composition Settings.
* **Open Composition** shows that composition.
* **Add to Current Comp** creates a layer; a composition can't be added to itself.
* **Duplicate** copies compositions.
* **Reimport from File…** replaces an asset in place, so every layer using it updates. SVG-derived assets don't offer this action.
* **Sequence Settings…** changes an image sequence's name and 1–120 fps playback rate. Frame count and dimensions are read-only; duration follows frame rate.
* **Move out of Folder** returns selected rows to root.
* **Delete** removes the selection. The project's last composition can't be deleted.

Double-click a composition to open it, a folder to expand/collapse it, or video/audio to open Footage Preview.

Footage Preview
~~~~~~~~~~~~~~~

Footage Preview plays a composition, image sequence, video, or audio source without changing the active composition. Scrub the bar, use transport controls, or use the shared playback shortcuts. Set In and Out with the work-area commands; the markers themselves aren't draggable. **Clear** restores the full source.

Choose **Add to Composition** to place the trimmed span at the active composition's playhead. The new layer keeps the chosen source offset and may extend beyond the composition end. A trim must remain at least one source frame long.

Compositions
------------

Create and edit a composition
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Choose **New Composition** in the Project panel or use its shortcut. Right-click a composition and choose **Edit**, double-click its open Timeline tab, or use **Composition settings** for the composition on screen.

.. list-table:: Composition settings
   :header-rows: 1
   :widths: 24 16 42

   * - Name
     - Type
     - Description
   * - Preset
     - Menu
     - Picks Custom, HD 1080p 30/60, HD 720p, UHD 4K, DCI 4K, QHD, Vertical, Square, or Cinema 2K dimensions and frame rate.
   * - Name
     - Text
     - Composition name, limited to the app's name length.
   * - Width / Height
     - Pixels
     - Output dimensions. Link them to preserve the current aspect ratio while editing either value.
   * - Frame Rate
     - fps
     - Composition frame grid and playback rate.
   * - Duration
     - Seconds/timecode
     - Composition length.
   * - Background
     - None/Solid
     - Transparent background or an opaque color. The color swatch opens the color picker.
   * - Motion Blur
     - Toggle
     - Master switch; a layer also needs its own Motion Blur switch.
   * - Shutter Angle
     - Degrees
     - Exposure span, 0–720 degrees.
   * - Shutter Phase
     - Degrees
     - Moves the exposure window relative to each frame.
   * - Samples
     - Integer
     - Sub-frame samples per blurred layer, from 2–64.

Edits preview live, but **Cancel** restores the original composition. **OK** commits the complete draft as one undo step. Resizing never scales layers; root layers shift so a plain resize remains centered. Parent children follow their roots. Shortening a source composition re-clamps nested layers.

Crop composition
~~~~~~~~~~~~~~~~

In edit mode, choose **Crop** and drag the on-canvas crop box or its handles. ``Enter``/Crop applies the box to the settings draft; ``Escape``/Cancel discards that box. You can crop repeatedly, edit the resulting dimensions, undo within the settings window, or cancel the whole draft.

Pre-compose
~~~~~~~~~~~

Select layers and use **Pre-compose**. Name the new composition, then choose:

* **Keep everything on this layer** — single-layer only. Only source content moves inside; transform, effects, keyframes, and timing remain on the original layer.
* **Move layers inside** — moves selected layers and their properties into the new composition and replaces them with one composition layer.

For Move mode, **Trim to Contents** makes the nested composition match the selected span; **Match Parent Composition** uses the parent duration.

Composition tabs
~~~~~~~~~~~~~~~~

Open compositions appear as Timeline tabs. Click to switch, double-click to open settings, and close a tab without deleting its composition. The composition-usage menu beside the timecode shows where the active composition is nested and lets you navigate to a parent use.

Toolbar and tools
-----------------

Selection tool
~~~~~~~~~~~~~~

Use Selection to select, move, resize, and box-transform layers. **Direct selection** lets you click canvas content directly; turn it off when you want canvas interaction to affect only Timeline-selected layers. Arrow keys nudge selected unlocked layers by 1 px; hold ``Shift`` for 10 px.

**Snapping** aligns moving layers to any enabled targets. Click it to toggle, or hold it to choose Composition Center, Composition Bounds, Guides, and Layer Bounding Boxes.

Hand and temporary pan
~~~~~~~~~~~~~~~~~~~~~~

Use Hand to pan the viewer. Middle-drag always pans. Hold ``Space`` and drag for temporary panning; a Space tap without a pan toggles playback. The Timeline uses the same temporary-pan gesture, with vertical-only movement over its label column.

Rotation and Anchor Point tools
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Rotation rotates selected layers on canvas. Anchor Point moves the pivot without visually moving the layer. Choose **Insert keyframe at playhead** or **Modify existing keyframes** for keyframed anchor/position data. The same choice is shared with the Anchor inspector.

Shape tool
~~~~~~~~~~

Hold the Shape tool to choose Rectangle, Ellipse, Polygon, or Star, then drag in the Composition viewer. The button remembers the last shape. Polygon/star drag direction becomes the shape's built-in orientation, leaving layer Rotation at zero.

.. _masks-and-paths:

Pen and Mask tool
~~~~~~~~~~~~~~~~~

Select the Pen tool with ``G``. With no suitable layer selected it draws a new path shape layer; on a selected visual layer the same gesture creates a :ref:`Mask <effect-mask>` instead. Compound paths support multiple contours with nonzero and even-odd fills.

Drawing a path
^^^^^^^^^^^^^^

Click in the viewer to lay a corner point. Drag while placing a point instead, and you pull out a pair of Bezier tangent handles, so the segment curves. Hold ``Shift`` while placing the next point to lock the new segment to 45° increments from the previous point.

Click the contour's first point again to close it, which also ends the drawing session while leaving the path editable. Press ``Enter`` to finish an open path, or ``Esc`` to cancel the path you are drawing. Pressing ``Esc`` again clears the pen's editing target.

To resume an unfinished path, click its end point once without dragging — the drawing session continues from there.

Adding, deleting, and converting points
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. list-table:: Point editing gestures
   :header-rows: 1
   :widths: 34 66

   * - Gesture
     - Result
   * - ``Ctrl`` + click a segment
     - Inserts a new point exactly on the curve at that spot without changing the path's shape. The cursor becomes a crosshair and a preview marker shows where the point will land.
   * - ``Ctrl`` + click a point
     - Removes that point and rejoins its neighbors. Points always win over segments, so a click that lands on both never splits the curve underneath.
   * - ``Delete`` or ``Backspace``
     - Removes every selected point at once.
   * - ``Alt`` + click a point
     - Converts the point between corner and smooth by retracting both handles or growing them back.
   * - ``Alt`` + drag a handle
     - Breaks the handle pair so the two sides bend independently, giving a sharp cusp with curves on both sides.
   * - ``Alt`` + click a handle
     - Retracts that single handle, straightening the segment on that side only.
   * - Drag a handle
     - Reshapes the curve. Once a pair is broken, each side keeps moving independently without holding ``Alt``.

Both point insertion and deletion are topology changes, so Animoia applies them to the base path *and* to every keyframe at once, which keeps an animated path consistent.

Selecting and moving points
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Click a point to select it and drag to move it. ``Shift`` + click adds or removes a single point from the selection, and ``Ctrl`` + ``A`` selects every point on the path, including the points of its holes.

When editable paths are on screen, dragging from empty space draws a marquee that box-selects points; hold ``Shift`` to add to the existing selection. Because a marquee would otherwise make masks unreachable on those layers, a **double-click** drag in empty space always creates a new mask or path instead.

With points selected, the arrow keys nudge the *points* rather than the layer — one composition pixel per press, or ten with ``Shift`` held. The nudge is measured on screen, so it stays exact on a rotated or scaled layer. Hold ``Shift`` while dragging points or handles to constrain the movement to 45° increments.

Points can be edited across several selected layers at once: clicking a point on another selected layer's path switches the pen to that path without needing ``Esc`` first.

.. seealso::

   :ref:`effect-mask` for the Mask properties this tool creates, :ref:`effects-paths` for operators that reshape the finished path, and :ref:`keyboard-shortcuts` for the full key list.

Type tool
~~~~~~~~~

Drag to create box text or click/type for text content. A new text layer starts empty. Rich-text controls target the active text selection; without one they target the full content and, where supported, all selected text layers. Undo/redo remains document-aware during text editing.

.. _puppet-tool:

Puppet Pin tool
~~~~~~~~~~~~~~~

Click a visual layer to add pins. The first pin creates the hidden Puppet effect. Drag pins to deform the generated mesh; pin positions auto-keyframe when animation is active. Use **Show Mesh** to reveal or hide the deformation mesh. Delete selected pins with the normal Delete command.

Add Layer
~~~~~~~~~

Click to add the remembered layer type; hold to choose **Solid**, **Adjustment**, or **Null**. A Solid fills the composition. An Adjustment layer applies its effects to content below through its alpha. A Null is an invisible 100×100 parenting target.

Composition viewer
------------------

Zoom, pan, and preview quality
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Choose Fit or a percentage from the viewer footer. Choosing any zoom recenters the composition. Pan with Hand, middle drag, or Space-drag. ``Ctrl`` + wheel zooms instead of scrolling the panel.

Preview quality offers Full, Half, Third, and Quarter. It affects interactive preview, not full-resolution snapshots or final rendering. Adaptive resolution may temporarily drop lower during slow drags/scrubs and returns when interaction stops.

Rulers, guides, and overlays
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Toggle rulers from the footer or View shortcut. Drag from the top ruler for a horizontal guide or left ruler for a vertical guide. Drag the ruler origin to move it; double-click to reset. Lock guides to prevent edits. The eraser clears all guides and resets the composition overlay to None.

The overlay menu offers None, Grid, Action Safe, Title Safe, Rule of Thirds, Golden Ratio, Golden Spiral, Diagonal Method, and Crosshair. These helpers never render or export.

Motion paths and box controls
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Show Motion Paths** displays selected position animation and editable spatial tangents. **Show Box Controls** shows layer bounds, resize handles, and anchor. Viewer overlays disappear during playback; gradient editing keeps only its own control visible.

Save Frame
~~~~~~~~~~

Choose **Save Frame As PNG** from the viewer menu or camera button. Animoia renders the current frame at full composition resolution and saves PNG. It uses the preferred snapshot directory when available, otherwise it asks you where to save the file.

Files are named ``<composition>_<frame>.png`` — frame 42 of "Comp 1" becomes ``Comp 1_42.png``. The frame number is not zero-padded, and frame 0 is kept as ``0``.

Saving never overwrites an existing snapshot. If the name is taken, Animoia appends a counter and keeps incrementing it, so clicking Save Frame four times on the same frame yields ``Comp 1_42.png``, ``Comp 1_42 (2).png``, ``Comp 1_42 (3).png``, and ``Comp 1_42 (4).png``. Gaps are filled rather than skipped: with ``Comp 1_42.png`` and ``Comp 1_42 (3).png`` already present, the next save takes ``Comp 1_42 (2).png``.

.. _color-panel:

Color panel
-----------

The Inspector's Color panel is an always-available quick picker for solid colors: a hue ring with a saturation/brightness triangle, a hex field, an eyedropper, and the project's swatches, all aimed at whatever the selection's Fill or Stroke currently is.

How it differs from the Color window
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Clicking a paint swatch in the properties list opens the floating **Color window**, which edits one property of one layer and offers the full paint model — gradients, gradient stops, and "none". The Color panel is the quick counterpart: solid colors only, but always on screen and aimed at the current selection.

Both write through the same path, so an edit in the panel scopes to a text selection and fans out across a multi-layer selection exactly as it does in the window. Choosing a solid color in the panel will replace a gradient fill.

The loaded brush
~~~~~~~~~~~~~~~~

With nothing selected, the panel is not inert. The wheel then edits the *armed* fill and stroke — the colors new shapes, paths, and text are created with, like the loaded brush of a traditional paint program. Set the color first, then draw, and the new layer arrives already the right color.

Fill and stroke targets
~~~~~~~~~~~~~~~~~~~~~~~

A combined Fill/Stroke target selects which of the two the wheel and hex field drive. A checkerboard behind a swatch means transparency, and the **none** control clears the paint entirely rather than setting it to transparent black.

Eyedropper
~~~~~~~~~~

The eyedropper samples a color from the screen. Where the operating system provides a native screen picker, Animoia uses it — that path samples the final composited image, including text, images, shadows, and content outside the application window, and brings its own magnifier. Some Linux desktops restrict screen capture, in which case sampling is limited to the Animoia window.

Otherwise Animoia falls back to an in-app overlay. Clicks inside the composition are resolved by sampling the rendered canvas directly; clicks elsewhere in the interface are resolved against the interface itself. Press ``Escape`` to cancel picking.

Swatches
~~~~~~~~

Save the current color as a project swatch with the add button, click a swatch to apply it, and right-click one for its actions, including removal. Swatches are stored with the project in the order you added them, so a palette travels with the file. Alpha is kept, which means the same RGB at two different opacities counts as two distinct swatches.

.. _layers-and-timeline:

Timeline
--------

Transport, ruler, and work area
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The transport shows current timecode and composition duration. Scrub the ruler to move the playhead. Page Up/Down steps one frame, or ten with ``Shift``. Home/End go to composition bounds. J/K visit visible keyframes.

The Work Area limits preview and can limit rendering. Set its start/end at the playhead, drag its handles, clear it, or **Trim comp to work area**. Trimming shifts layers to the new zero point and clears the work area.

Layer strip editing
~~~~~~~~~~~~~~~~~~~

Drag a strip to move it. Drag either edge to trim. ``Shift`` while moving/trimming snaps to visible in/out points, keyframes, and the playhead. Use commands to trim an edge to the playhead, slide an in/out point to the playhead, split layers, or jump to layer bounds.

Drag Project items to empty Timeline space to insert them. ``Alt``-drop a compatible item on a layer to replace its source. OS files dropped on the Timeline import and insert. Drag layers vertically by their name to reorder.

Layer switches and links
~~~~~~~~~~~~~~~~~~~~~~~~

The stack exposes Video, Audio, Lock, Continuous Rasterization, Sampling, Motion Blur, Adjustment, Parent/Link or Stencil, and Invert Stencil controls where applicable. Multi-selected switches synchronize to the state you choose on the clicked row.

.. _sampling-switches:

Sampling and Continuous Rasterization
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Scaling quality used to be one combined switch. It is now two, because the underlying question is different for vector and bitmap layers, and only one of the two applies to any given layer:

.. list-table::
   :header-rows: 1
   :widths: 26 22 52

   * - Switch
     - Appears on
     - What it does
   * - **Continuous Rasterization**
     - Precomps, shapes, text, and SVG — anything resolution independent
     - Re-renders the layer at the size it is actually drawn, so it stays sharp when scaled up.
   * - **Sampling**
     - Video, images, and other fixed-size rasters
     - Chooses between **bilinear**, which smooths the pixels when scaled, and **nearest neighbour**, which keeps hard pixel edges.

The distinction is simply whether the source can be redrawn larger. A vector or a nested composition can, so it gets Continuous Rasterization; a bitmap has a fixed number of pixels and can only be interpolated, so it gets Sampling.

What Continuous Rasterization means depends on the layer:

- On a **precomp**, turning it on collapses the nested composition into its parent, so it stays sharp when scaled — but the nested layer's own effects and masks are ignored, which is the trade-off. Off, the precomp renders into its own buffer and softens when scaled up.
- On **vector artwork**, turning it on rasterizes at a much higher resolution so the layer holds detail when scaled up. Off, it is rasterized once at its default resolution.

.. tip::

   Use nearest-neighbour Sampling deliberately for pixel art and low-resolution sources. Bilinear smoothing is what turns crisp pixel art into mush when you scale it up.

Parent and Stencil columns
^^^^^^^^^^^^^^^^^^^^^^^^^^

The Parent and Stencil columns share one slot in the layer stack. Click the column header, or press ``X``, to switch between them.

A layer can parent to another layer, a motion tracker, or a stabilized parent result. Invalid self/descendant choices are excluded.

Assigning a **Stencil** uses another layer as this layer's matte and initially hides the stencil source; turn its eye back on if it should also render visibly. **Invert Stencil** swaps which side is kept. For finer control over which channel drives the matte, use the :ref:`Stencil effect <effect-stencil>` instead — it exposes channel choice and a blend amount that this column does not.

Locked layers stay visible but reject edits, selection, dragging, switches, and renaming. The lock control and gated right-click menu remain available.

Timeline view controls
~~~~~~~~~~~~~~~~~~~~~~

Use minus/plus, the zoom slider, or ``Ctrl`` + wheel to zoom around the playhead. Horizontal wheel/``Shift``-wheel scrolls. The custom scrollbar moves through long compositions. **Purge** clears cached preview frames, which frees the memory shown in the :ref:`frame cache meter <gpu-frame-cache>` without touching your project.

.. _rendering-and-export:

Exporting
---------

Export settings
~~~~~~~~~~~~~~~

Choose **File > Export…**. Settings persist between sessions.

.. note::

   This dialog was previously called **Render**. The settings are unchanged; only the name differs, so older notes referring to "Render…" describe the same window.

.. list-table:: Export settings
   :header-rows: 1
   :widths: 24 17 41

   * - Name
     - Type
     - Description
   * - Mode
     - Menu
     - Video Only, Audio Only, or Video + Audio.
   * - Format
     - Menu
     - Video: MP4/MOV/WebM/MKV; image sequence: PNG/JPG ZIP; audio: WAV/MP3.
   * - Resolution
     - Menu
     - Full, Half, or Quarter; dimensions are rounded to even pixels.
   * - Frame Rate
     - fps
     - Can't exceed the composition rate. Once customized, it stays customized but remains clamped.
   * - Range
     - Menu
     - Full Composition or Work Area.
   * - Video Bitrate
     - Mbps
     - Applies to encoded video formats.
   * - Audio Bitrate
     - kbps
     - Applies to compressed audio.
   * - JPEG Quality
     - Percent
     - Applies to JPG sequences.
   * - ZIP Compression
     - Level
     - Applies to PNG/JPG sequence archives.
   * - Filename
     - Text
     - Invalid filename characters and repeated spaces become hyphens.
   * - Location
     - Folder
     - Last valid render folder wins; Preferences supplies a fallback.

A composition with no audible audio still renders: combined output omits audio where possible and audio-only output uses silence. Existing filenames show an overwrite state. A missing or unwritable folder disables Render until you choose another.

During rendering, the window shows progress, elapsed time, remaining estimate, and status. Closing asks before discarding the render. ``Escape`` opens/cancels the close flow; ``Enter`` starts an idle render or closes a completed one, but never interrupts an active render.

Preferences
-----------

Appearance
~~~~~~~~~~

Changes apply immediately and save automatically. Where the old build offered fixed named themes, appearance is now continuous: five sliders shape the interface, and every one of them defaults to ``0``, which reproduces the shipped look exactly rather than approximating it with a preset.

Surfaces and text
^^^^^^^^^^^^^^^^^

Each slider owns a different set of interface tokens, so they compose instead of fighting one another. Every one has its own **Reset** button, which is disabled while that axis is already at ``0``.

.. list-table::
   :header-rows: 1
   :widths: 22 20 58

   * - Slider
     - Range
     - What it moves
   * - **Brightness**
     - −100 to 100
     - Moves every panel surface up or down together.
   * - **Contrast**
     - −100 to 100
     - Changes only the spread *between* surfaces, leaving their average where it is. Text is excluded, so raising contrast cannot wash the interface toward grey.
   * - **Borders**
     - −100 to 100
     - Moves the outline tokens alone, from nearly invisible panel edges to strongly delineated ones.
   * - **Text**
     - −100 to 100
     - Moves text and, because icons inherit their color, icon brightness with it.
   * - **Neutral tone**
     - −100 to 100
     - Tints every neutral surface. ``0`` is true grey with no tint at all; negative values tint warm and positive values tint cool.

.. tip::

   **Neutral tone** is centered on zero rather than starting there, so warmth and coolness are symmetric — dragging left and right from the middle produces mirror-image tints, and crossing zero passes through pure grey instead of jumping between hues.

Accent
^^^^^^

Choose from 23 accent swatches, ordered around the hue circle so the picker reads as a spectrum: Crimson, Sakura, Ruby, Ember, Sand, Amber, Gold, Lime, Grass, Forest, Emerald, Jade, Sky, Azure, Tide, Slate, Indigo, Aurora (the default), Violet, Galaxy, Magenta, Fuchsia, and Rose. The accent drives highlights, active controls, the playhead, and focus rings.

Lightness and saturation are tuned per hue rather than held constant, so the yellows and greens do not read as washed out next to the blues.

Property value colors
^^^^^^^^^^^^^^^^^^^^^

Property values in the inspector and timeline are color-coded by state, and those colors are derived from your accent so they always sit in the same family as the rest of the interface. Four states are exposed, and each can be overridden with a color of your own:

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - State
     - Meaning
   * - **Normal**
     - The property is at its default value and is not animated.
   * - **Animated**
     - The property has keyframes. Selected keyframes use this color too, since both mean "this property is animated".
   * - **Animated and modified**
     - The property has keyframes *and* has been changed from its default.
   * - **Modified**
     - The property has been changed from its default but is not animated.

**Reset** discards your overrides and returns to the combination suggested by the current accent.

.. note::

   The suggested "modified" color is the accent pulled toward warm rather than a fixed red, which is what keeps it legible when you pick a red or pink accent. Overriding all four with similar colors defeats the point of the coding — keep them distinguishable at a glance.

Window controls
^^^^^^^^^^^^^^^

Choose **Classic** or **Traffic Lights** for the window buttons.

Reduce UI animations
^^^^^^^^^^^^^^^^^^^^

Turns off interface transitions and motion. Animoia follows your operating system's reduced-motion setting by default and tells you when it is doing so; setting this switch explicitly overrides the system preference in either direction. It affects interface chrome only — it never changes how your composition renders or exports.

**Reset appearance** at the bottom of the tab returns every control on the tab, sliders and accent alike, to its default.

Keyboard Shortcuts
~~~~~~~~~~~~~~~~~~

Search commands or keys, click a binding, then press the new combination. Animoia reports conflicts with another command. Reset one command, or use **Restore defaults** to return every binding at once. ``Mod`` displays as ``Ctrl`` on Windows and Linux. Delete and Backspace are treated as aliases.

.. _prefs-performance:

Performance
~~~~~~~~~~~

.. list-table:: Performance preferences
   :header-rows: 1
   :widths: 28 17 38

   * - Name
     - Type
     - Description
   * - GPU memory for frame caching
     - Percentage
     - Sets how much graphics memory Animoia can use to keep previewed frames ready for smoother playback and scrubbing. The File menu's :ref:`frame cache meter <gpu-frame-cache>` shows how much of this budget is actually in use.
   * - Set GPU memory manually
     - Gigabytes
     - Overrides the percentage with an explicit figure, for when you know how much memory the machine can spare.
   * - Adaptive resolution
     - Toggle
     - Temporarily lowers preview resolution during slow continuous edits.
   * - Minimum resolution
     - Menu
     - Half, Third, Quarter, or Eighth; never degrades a preview already at/below the floor.
   * - Sensitivity
     - 25–400 ms
     - Frames slower than this trigger a drop. Higher values are less eager.
   * - Render location
     - Folder/path
     - Fallback when no valid last-rendered folder exists.
   * - Presets folder
     - Folder/path
     - Watched recursively by the Effects panel; slash-separated preset names create subfolders.
   * - Snapshot location
     - Folder/path
     - Preferred destination for Save Frame.

.. note::

   Saved folder paths persist between sessions. If the preferences file cannot be written — a read-only or restricted profile directory, for instance — your changes apply for the current session only.

Errors and recovery
-------------------

GPU out of memory
~~~~~~~~~~~~~~~~~

If the graphics driver resets, Animoia pauses, clears GPU resources, learns a lower cache ceiling, and rebuilds automatically. The dialog reports **Recovering** and then **Renderer recovered**. Your project isn't discarded. Lower **Preferences > Performance > GPU memory for frame caching** if it repeats.

Unsupported or unavailable media
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

An unavailable source renders nothing until it can be decoded or reimported. Some unsupported MOV codecs are demuxed to sequential frames automatically. Image-sequence failures and tracking reader errors are shown in their windows rather than replacing the project.

Modal and playback locks
~~~~~~~~~~~~~~~~~~~~~~~~

Playback hides editing overlays and blocks document-changing shortcuts. Tracking, Footage Preview, Render, confirmation, close, and error windows own shortcuts while open. Crop mode blocks the rest of the editor until confirmed/cancelled. Saving remains available even while another modal is open.
