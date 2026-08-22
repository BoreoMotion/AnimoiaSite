.. _keyboard-shortcuts:

Keyboard shortcuts
==================

Shortcut conventions
--------------------

``Mod`` means ``Ctrl`` on Windows and Linux. Shortcuts are editable in **Preferences > Keyboard Shortcuts**. Delete and Backspace are equivalent. Most document-changing shortcuts are disabled during playback or while a modal window owns the keyboard.

.. list-table:: File
   :header-rows: 1
   :widths: 30 20 50

   * - Command
     - Shortcut
     - Behavior
   * - New project
     - Mod+Alt+N
     - Opens the destructive new-project confirmation.
   * - New composition
     - Mod+N
     - Opens Composition Settings in create mode.
   * - Composition settings
     - Mod+K
     - Edits the composition on screen.
   * - Open project
     - Mod+O
     - Opens a ``.moia`` project.
   * - Save project
     - Mod+S
     - Saves; works even while another modal is open.
   * - Save As
     - Mod+Shift+S
     - Saves to a new file.
   * - Save Increment
     - Mod+Alt+S
     - Saves a numbered copy after the project has a filename.
   * - Export
     - Mod+M
     - Opens Export.

.. list-table:: Edit
   :header-rows: 1

   * - Command
     - Shortcut
     - Behavior
   * - Undo
     - Mod+Z
     - Undoes the latest document change; also works during text editing.
   * - Redo
     - Mod+Shift+Z
     - Redoes the latest undone change.
   * - Copy
     - Mod+C
     - Copies layers, effects, or keyframes from the last-interacted scope.
   * - Cut
     - Mod+X
     - Copies then removes the scoped selection; locked items survive.
   * - Paste
     - Mod+V
     - Keyframes land at playhead; effects on selected layers; otherwise layers.
   * - Duplicate
     - Mod+D
     - Duplicates selected layers or effects by active scope.
   * - Delete
     - Backspace/Delete
     - Deletes the last-interacted layer/effect/keyframe/pin/path/file selection.
   * - Select All
     - Mod+A
     - Selects all items in the active scope.
   * - Rename
     - Enter
     - Renames one selected layer or effect when no control owns Enter.

.. list-table:: Playback
   :header-rows: 1

   * - Command
     - Shortcut
     - Behavior
   * - Play/Pause
     - Space
     - Toggles on release if Space wasn't used to pan.
   * - Previous/Next frame
     - Page Up / Page Down
     - Steps one frame; hold Shift for ten.
   * - Beginning/End
     - Home / End
     - Goes to composition or preview source bounds.
   * - Previous/Next visible keyframe
     - J / K
     - Visits visible Timeline keyframes.

.. list-table:: Timeline
   :header-rows: 1

   * - Command
     - Shortcut
     - Behavior
   * - Trim in/out to playhead
     - Alt+[ / Alt+]
     - Trims selected layer edges.
   * - Move in/out to playhead
     - [ / ]
     - Slides selected layers so the chosen edge reaches the playhead.
   * - Split layer
     - Mod+Shift+D
     - Ends original and starts duplicate at playhead.
   * - Set work-area start/end
     - B / N
     - Sets an endpoint at playhead.
   * - Clear work area
     - Mod+Alt+B
     - Restores full composition range.
   * - Trim comp to work area
     - Mod+Shift+X
     - Shrinks the composition and shifts layers.

.. list-table:: Layers
   :header-rows: 1

   * - Command
     - Shortcut
     - Behavior
   * - Reveal Position
     - P
     - Reveals it only when selected layers have animation/modifiers there.
   * - Reveal Scale
     - S
     - Same rule for Scale.
   * - Reveal Rotation
     - R
     - Same rule for Rotation.
   * - Reveal Anchor Point
     - A
     - Same rule for Anchor Point.
   * - Reveal Opacity
     - T
     - Same rule for Opacity.
   * - Reveal animated properties
     - U
     - Reveals all keyframed/modified properties.
   * - Collapse properties
     - L
     - Collapses selected layers.
   * - Pre-compose
     - Mod+Shift+C
     - Opens Pre-compose.
   * - Go to in/out point
     - I / O
     - Jumps playhead to selected layer bounds.
   * - Nudge
     - Arrow keys
     - Moves unlocked selected layers 1 px; Shift moves 10 px.

.. list-table:: Keyframes, tools, and view
   :header-rows: 1

   * - Command
     - Shortcut
     - Behavior
   * - Easy Ease
     - F9
     - Applies Easy Ease to selected keyframes.
   * - Ease In
     - Shift+F9
     - Applies Ease In.
   * - Ease Out
     - Mod+Shift+F9
     - Applies Ease Out.
   * - Selection / Hand / Rotation / Anchor
     - V / H / W / Y
     - Activates the named tool.
   * - Pen
     - G
     - Activates Pen/Mask.
   * - Puppet
     - P
     - Activates Puppet only when layer-property reveal doesn't take priority; with no layer selected it directly selects Puppet.
   * - Toggle rulers
     - Mod+R
     - Shows or hides Composition rulers.
   * - Toggle Parent / Stencil
     - X
     - Swaps the shared Timeline column between :ref:`Parent and Stencil <sampling-switches>`.
   * - FX Console
     - Mod+Space
     - Opens the :ref:`FX Console <fx-console>` launcher for effects, presets, and commands.

.. list-table:: Pen tool and path editing
   :header-rows: 1

   * - Command
     - Shortcut
     - Behavior
   * - Finish the open path
     - Enter
     - Ends the drawing session and leaves the path editable.
   * - Cancel drawing
     - Escape
     - Discards the path being drawn; pressing it again clears the pen's editing target.
   * - Select all points
     - Mod+A
     - Selects every point on the active path, including the points of its holes.
   * - Delete selected points
     - Backspace/Delete
     - Removes each selected point from the base path and from every keyframe.
   * - Nudge selected points
     - Arrow keys
     - Moves points 1 composition pixel; Shift moves 10.
   * - Insert or remove a point
     - Ctrl + click
     - Clicking a segment inserts a point without changing the shape; clicking a point removes it.
   * - Corner/smooth and broken handles
     - Alt + click / Alt + drag
     - Alt+click a point retracts or regrows both handles; Alt+drag a handle breaks the pair into a cusp.
   * - Constrain to 45°
     - Shift
     - Constrains a new segment, a point drag, or a handle drag to 45° increments.
   * - Add or remove one point
     - Shift + click
     - Toggles a single point in the selection without disturbing the rest.
   * - Create over existing paths
     - Double-click drag
     - Starts a new mask or path even while editable points are on screen.

See :ref:`masks-and-paths` for the full path-editing workflow.

Additional fixed keys
---------------------

``Escape`` clears the most recently active selection scope first; modal windows use it for their safe cancel/close behavior. ``Enter`` confirms most floating settings windows when a text/numeric/select control doesn't own it. Middle-click without dragging toggles playback in the viewer/Timeline; middle-drag pans. ``Shift`` while easing-handle dragging snaps to quarter-grid lines, while ``Shift`` during layer-strip movement enables Timeline snapping.
