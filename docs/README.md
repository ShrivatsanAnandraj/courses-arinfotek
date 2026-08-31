# Ideas / Reference

This folder holds feature ideas saved for future reference. Nothing here is
wired into the running application.

## Files

- `GUI_Code_Runner_Idea.docx` — Idea for a self-hosted code runner that lets
  Python `turtle` and `tkinter` (GUI) code run and shows the result as an image.

## Where the full implementation lives

A complete implementation of this idea was written and is preserved on the git
branch `gui-runner` in this repository (not merged into `main`). It contains
`server/`, `api/gui-execute.js`, frontend routing in
`src/components/Tutorial/codeExecutor.js`, the GUI image preview in the
Tutorial/Workspace panels, and the Turtle/Tkinter lesson content.

To restore it later:

```bash
git checkout gui-runner
```

Then follow the activation steps described in the Word document (deploy the
`server/` service and set `GUI_RUNNER_URL`).
