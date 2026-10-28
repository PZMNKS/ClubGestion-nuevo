# ClubGestión — Nielsen usability review

## Implemented coverage

1. **Visibility of system status:** textual and color-coded debt/attendance/document states; success and error feedback; uploaded receipts remain explicitly pending review.
2. **Match with the real world:** familiar club terminology, dates, times, location icons and “Sí voy / No voy”.
3. **User control and freedom:** creation dialogs have visible Cancelar; payment review has Atrás; keyboard Escape/focus management provided by shared dialogs; attendance/payment changes offer undo.
4. **Consistency and standards:** shared primary buttons, minimum 44px controls, common creation footer and fixed navigation in both profiles.
5. **Error prevention:** no instant “pay everything”; explicit review before recording payments, required creation fields, email/phone checks, accepted file types and 10 MB size limits.
6. **Recognition rather than recall:** Mi Club replaces Más, selected tabs are exposed, labeled inputs and key player information appear together.
7. **Flexibility and efficiency:** direct attendance actions, existing filtered member histories, dashboard creation shortcuts and centralized administration links.
8. **Aesthetic and minimalist design:** player home prioritizes match, debt and a separate announcement preview; secondary statistics remain in profile/club views.
9. **Error recognition and recovery:** Spanish unavailable-page messages, retry/navigation controls, explicit validation messages and actionable missing-file/phone feedback.
10. **Help and documentation:** document guidance and contextual instructions for receipt registration without pretending automated legal advice.

## Verified flows

- Player/manager route rendering, mobile layouts, attendance response shared with events.
- Event creation, legal-document registration, publication of an announcement visible to the player.
- Two-step receipt registration without changing the debt; manager payment cancellation without recording payment.
- Viewport overflow checks at 320, 384, 480 and 1280 pixels.

## Prototype boundaries and remaining validation

- New events, announcements, document files and receipts are session-only frontend demonstrations, not server uploads or real payments.
- Existing member and manual attendance stores retain their prior device-local persistence.
- Multi-user delegation, verified roles and access controls require authentication and a connected backend; not implemented in this presentation-only revision.
- Seed documents have metadata, not real attachments; users are told when no file exists.
- Reading in under 40 seconds is a usability goal, not a measured result. Confirm with representative users aged 25–50.
- Passing a heuristic review is not certification of full usability or accessibility. Test screen readers, long club names, large text and real club content before launch.
