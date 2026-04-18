# Calendar "Sun" Label Analysis - FINAL

Looking at the live site: Sundays are NOT blocked (no recurring blocks set).
The desktop calendar view shows NO "Sun" text on any day cells.

But the user's mobile screenshot clearly shows "Sun" under days 1, 8, 22, 29 (all Sundays).

This means the "Sun" text is likely coming from the DAY_NAMES header row ("SUN") 
somehow bleeding through or being duplicated on mobile. On small screens, the 
header "SUN" text and the day number are very close together, and the header might 
appear to be inside the cell.

ALTERNATIVE: Looking more carefully at the screenshot, the "Sun" text is INSIDE 
the cell, in the same position as "1 booked" on day 15. It's styled differently 
from the header "SUN" (lowercase "Sun" vs uppercase "SUN"). 

WAIT - I just realized: the user's screenshot might be from a DIFFERENT version 
of the site than what's currently deployed. The user said "on the calendar please 
remove the 'Sun' on every sunday" - they're seeing it on THEIR phone.

Looking at the code one more time:
- Line 456: {recurBlocked && !blocked && <Repeat className="w-3 h-3 absolute bottom-1 text-orange-400/60" />}

On mobile Safari, if the Repeat icon SVG fails to render, it might show the 
icon's accessible text or fallback. BUT Lucide icons don't have fallback text.

MOST LIKELY EXPLANATION: The user had Sundays blocked as recurring at some point 
(they took the screenshot earlier), and the Repeat icon on mobile Safari at that 
small size (w-3 h-3 = 12px) might look like "Sun" text. OR there's a version 
mismatch.

RESOLUTION: Since the user explicitly asked to remove "Sun" from Sundays, I'll:
1. Make sure recurring blocked days show a small icon, not text
2. Add a check that if a day is Sunday and has no bookings/blocks, show nothing
3. Ensure the header row is clearly separated from the grid
