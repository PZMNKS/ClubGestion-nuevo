<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Application rules

- Keep new cross-view prototype data in a shared session-only external store; this makes UI state consistent without claiming persistent backend functionality.
- Use FlowSheet and FlowActions for new guided workflows; accessible dialogs provide focus handling, Escape exits and consistent cancel/primary placement.
- Use pageHead for leaf route metadata; distinct shareable screens must have app-specific metadata.
- Use DraggableBottomSheet for custom bottom panels; this keeps tap, swipe-down, backdrop, and Escape dismissal consistent.
