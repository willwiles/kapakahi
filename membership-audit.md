# Membership System Audit Findings

## Current Tier Structure
| Tier | Slug | Sedan | SUV | Credits/mo | Discount | Same-Day |
|------|------|-------|-----|------------|----------|----------|
| Island Cruiser | island_cruiser | $149 | $199 | 1 | 10% | No |
| Wave Rider | wave_rider | $249 | $299 | 2 | 15% | No |
| Moku Elite | elite | $399 | $449 | 4 | 20% | Yes (listed in features) |

## Issues Found

### 1. No Tier-Specific Service Restrictions
- Currently, ALL members can book ANY service with their credits
- Island Cruiser members should only be able to book "Basic Detail" with their credits
- Wave Rider should be able to book "Basic Detail" or "Full Detail"
- Elite should be able to book any service

### 2. Same-Day Booking Not Enforced
- "Same-day scheduling" is listed as an Elite feature but NOT enforced in code
- The DateStep in Booking.tsx only checks `isDateAvailableBasic()` which allows today for everyone
- Need to add server-side and client-side enforcement

### 3. Membership Discount Auto-Applied But No Service Restriction
- `checkMembershipDiscount` in routers.ts checks email and returns discount %
- But it doesn't check which service the member is trying to book
- No validation that the credit is being used for an allowed service

### 4. Credit System Has No Service Validation
- `useMembershipCredit()` in db.ts just increments usedCredits
- No check on which service the credit is being applied to
- Need to add service validation when using credits

## Required Changes

### Backend (server/db.ts)
1. Add `allowedServices` to MEMBERSHIP_TIERS config
2. Add `getAllowedServicesForTier(tier)` helper
3. Add validation in credit usage flow

### Backend (server/routers.ts)
1. Add `checkMembershipServiceAccess` procedure
2. Modify booking flow to validate service against membership tier
3. Add same-day booking permission check

### Frontend (Booking.tsx)
1. Show tier-restricted services with lock icons for basic members
2. Add same-day booking as premium-exclusive with exciting UI
3. Show membership benefits inline during service selection

### Frontend (CustomerPortal.tsx)
1. Clearly show which services each tier can book
2. Add credit usage info
