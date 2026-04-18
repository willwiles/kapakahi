# Moku Detailing - TODO

## Full-Stack Upgrade
- [x] Upgrade to web-db-user (full-stack with database)
- [x] Store Twilio credentials as secrets (SID, Auth Token, Phone Number)

## Database & API
- [x] Create bookings table schema
- [x] Build POST /api/bookings endpoint (create booking)
- [x] Build GET /api/bookings/availability endpoint (check available slots)
- [x] Build reminder cron job endpoint

## Frontend Updates
- [x] Add Military/PCS service option to booking flow
- [x] Fix service navigation bug (clicking service step should go back properly)
- [x] Update booking flow to POST to backend API instead of Formspree
- [x] Fetch real-time availability from backend API
- [x] Build and integrate FAQ section into homepage

## Notifications
- [x] Build beautiful HTML email confirmation template with Aloha spirit
- [x] Build SMS confirmation message with Aloha spirit
- [x] Implement Twilio SMS sending on booking confirmation
- [x] Implement email sending on booking confirmation
- [x] Implement day-before reminder (SMS + email)

## Testing
- [x] Test full booking flow end-to-end
- [ ] Verify SMS delivery
- [ ] Verify email delivery
- [ ] Verify real-time slot elimination

## Previous Updates (Pending)
- [ ] Hours: Mon-Sat: 7AM-6PM → 8AM-6PM, 7 Days a Week
- [ ] Instagram: @mokudetailing → @mokudetail, link to instagram.com/mokudetail
- [ ] Service areas: Add Mililani, Waianae, Wahiawa, Waikele, Makakilo, Waipahu
- [x] Fix: Clicking SERVICE step indicator from DATE step doesn't navigate back to service selection
- [x] Set up day-before reminder cron job at 8 AM HST
- [x] Build Brands We Service auto-scrolling logo strip with high-res logos
- [x] Include Tesla in the brands logo strip
- [x] Fix step navigation bug (clicking completed step indicators to go back)
- [x] Fix: Make Audi and Maserati logos white/visible against dark background
- [x] Fix: Brands logo strip not swipeable on mobile

## Stripe Payment Integration
- [x] Add Stripe feature scaffold (webdev_add_feature)
- [x] Request Stripe API keys from user
- [x] Create payment intent endpoint for $50 deposit
- [x] Add Stripe checkout step to booking flow (Step 5 before confirmation)
- [x] Display deposit amount, cancellation policy on payment screen
- [x] Store payment intent ID and deposit status in bookings table
- [x] Send deposit receipt in SMS/email confirmation
- [x] Show remaining balance in day-before reminder
- [x] Add cancellation/refund logic (24hr policy)

## Customer Retention
- [x] Automated follow-up SMS 24hrs after service ("How was your detail?")
- [x] Automated re-engagement SMS 30/60/90 days after service ("Time for a refresh?")

## Booking Flow Verification
- [x] Test full 6-step booking flow end-to-end (service → date → time → details → payment → confirm)
- [x] Verify Stripe payment step renders correctly with card input
- [x] Verify confirmation step shows deposit receipt info

## Admin Booking Dashboard
- [x] Create admin-only booking management page at /admin/bookings
- [x] Display all bookings in a sortable/filterable table (date, service, customer, status, deposit)
- [x] Add ability to confirm bookings (change status to confirmed)
- [x] Add ability to mark bookings as completed
- [x] Add ability to cancel bookings with refund option
- [x] Show booking details in expandable row
- [x] Add admin navigation via DashboardLayout sidebar
- [x] Protect admin routes with role-based access control

## Automated Follow-Up & Re-Engagement SMS
- [x] Add followUpSmsSent and reEngagementSmsSent fields to bookings schema
- [x] Build follow-up SMS template ("How was your detail?" 24hrs after service)
- [x] Build re-engagement SMS templates (30/60/90 days: "Time for a refresh?")
- [x] Create server endpoint to trigger follow-up SMS for completed bookings
- [x] Create server endpoint to trigger re-engagement SMS for past bookings
- [x] Add follow-up and re-engagement status tracking in admin dashboard

## Admin Access
- [x] Make /admin/bookings redirect to login when not authenticated (instead of showing Access Denied)
- [x] Promote owner account to admin role in database

## Bug Fixes
- [x] Fix admin access denied issue — owner sees "Access Denied" on /admin/bookings
- [x] Replace Manus OAuth admin login with PIN code gate
- [x] Store admin PIN as server-side secret
- [x] Build PIN entry UI with 6-digit input
- [x] Add server-side PIN verification endpoint
- [x] Store PIN session in localStorage after successful entry

## Homepage Booking Links
- [x] Add booking link under Memberships section ("Become a Member" with note about first detail required)
- [x] Add booking link under Military Discount in Additional Services section
- [x] Remove em dashes from About section ("engineered — the" and "exotics — we")

## Automated SMS Cron & Admin Nav
- [x] Set up server-side cron job to run follow-up and re-engagement SMS daily at 10 AM HST
- [x] Add admin-only "Manage Bookings" link to navbar (visible only when logged in as admin via PIN)
- [x] Rewrite all SMS templates with aloha spirit (warm, Hawaiian-flavored tone)

## Customer Portal & Database
- [x] Create customers table (name, email, phone, birthday, vehicles, notes)
- [x] Build customer registration page with email/password
- [x] Build customer login page
- [x] Build customer profile page (edit name, phone, birthday, vehicles)
- [x] Build customer booking history page (view past appointments, rebook)
- [x] Link bookings to customer accounts
- [x] Add customer database view in admin dashboard (search, filter, birthdays)

## Employee Portal
- [x] Create employees table (name, email, phone, role, pin/password)
- [x] Build employee login page
- [x] Create service_checklists table (service type → checklist items)
- [x] Seed default checklist items for each service package (93 items across 5 services)
- [x] Build employee job view with service checklist (checkboxes for each item)
- [x] Create job_photos table (booking_id, employee_id, type: before/after, url)
- [x] Build before/after photo upload for employees on each job
- [x] Build employee dashboard showing assigned jobs and completion status

## Admin Enhancements
- [x] Add employee management in admin (add/remove employees, toggle active status)
- [x] Add customer database browser in admin (search, filter, view details)
- [x] Add photo review in admin (view vehicle photos per booking)
- [x] Add checklist completion tracking in admin per booking
- [x] Remove em dash from "marques — Mercedes" text
- [x] Audit and remove all em dashes from FAQ answers
- [x] Make Tesla logo red in BrandsSection
- [x] Enhance Audi logo in BrandsSection

## Vehicle Photo Upload in Booking Flow
- [x] Add "Show Us Your Ride" step (Step 5) between Details and Payment in booking flow
- [x] Add condition tags: sand, hard water spots, scratches, pet hair, bird droppings, tree sap, stains, oxidation
- [x] Add photo upload with suggested shots (front, rear, interior, problem areas)
- [x] Add optional notes field ("Anything we should know?")
- [x] Store photos in S3 and link to booking
- [x] Show vehicle photos in employee job detail view
- [x] Show vehicle photos in admin booking detail view

## Branding Assets
- [x] Create scalable vector (SVG) version of Moku Detailing logo for embroidery/print
- [x] Design eye-catching business cards matching brand aesthetic (front + back)
- [x] Homepage service clicks should navigate to booking page with service pre-selected, starting at date step
- [x] Fix boxy logo appearance in hero section animation (remove visible rectangular background)

## Logo & Business Card Redo
- [x] Recreate exact logo from reference image as SVG vector (flowing wave M, droplet O, wave-tail KU)
- [x] Redesign business cards with darker premium finish (matte black, spot UV, carbon fiber texture, silver foil)

## Customer Loyalty/Rewards System
- [x] Add loyalty schema (customerLoyalty table: customerId, totalVisits, currentTier, totalSpent, discountCode)
- [x] Define milestone tiers (Bronze 5 visits, Silver 10, Gold 20, Platinum 50) with discount percentages
- [x] Auto-increment visit count when booking status changes to "completed"
- [x] Generate unique discount codes at milestone thresholds
- [x] Show loyalty status in customer portal (tier, visits, next milestone, available rewards)
- [x] Show loyalty info in admin customer detail view
- [x] Apply discount codes during booking checkout

## Google Reviews Integration
- [x] Add post-service review prompt (shown after booking marked complete)
- [x] Create a review prompt component with Google Reviews link
- [x] Send follow-up SMS/notification with Google Review link after service completion
- [x] Add Google Reviews section on homepage showing review count and rating

## Membership Auto-Billing (Stripe Subscriptions)
- [x] Create Stripe products/prices for each membership tier (Monthly Maintenance, Premium, Elite)
- [x] Add membership schema (customerMemberships table: customerId, stripeSubscriptionId, tier, status)
- [x] Build membership signup flow with Stripe Checkout for subscriptions
- [x] Handle subscription webhooks (created, updated, canceled, payment_failed)
- [x] Show membership status in customer portal
- [x] Show membership info in admin dashboard
- [x] Auto-apply membership discounts to bookings

## Brand Logo Audit
- [x] Audit all brand logos under "Brands We Service" — replaced Audi, Tesla, Ferrari, Bentley, Maserati, Jaguar with high-res transparent versions

## Customer Login from Homepage
- [x] Add customer account/login button to homepage navbar
- [x] Show "My Account" link when customer is logged in (stored in localStorage)
- [x] Link to customer portal from navbar for easy access to appointments, history, loyalty status

## Bug Fixes (Continued)
- [x] Fix Audi logo white background in Brands We Service section — was a cache issue, logo is fine

## Loyalty Discount Codes at Checkout
- [x] Add discount code input field to booking payment step (Step 6)
- [x] Create backend procedure to validate discount codes and return discount percentage
- [x] Apply discount to deposit amount when valid code is entered
- [x] Mark reward as redeemed after successful booking with discount
- [x] Show discount amount in booking confirmation

## Google Reviews Homepage Section
- [x] Create Google Reviews section component with star rating display
- [x] Show review count (106 reviews) and average rating (5.0)
- [x] Display featured review quotes with customer names
- [x] Add "View All Reviews" CTA linking to Google Maps reviews
- [x] Position near hero section for maximum visibility

## Admin Loyalty & Membership Dashboard
- [x] Add Loyalty tab to admin dashboard showing all customer tiers and visit counts
- [x] Add Membership tab to admin dashboard showing active subscriptions
- [x] Create backend procedures for admin to query loyalty and membership data
- [x] Show tier distribution summary (how many Bronze, Silver, Gold, Platinum)
- [x] Show membership revenue summary

## Auto-Apply Membership Discounts at Booking
- [x] Detect customer membership status during booking by email lookup
- [x] Auto-apply tier-based discount (Basic 5%, Premium 10%, Elite 15%) to deposit
- [x] Show membership discount badge in payment step UI
- [x] Skip manual discount code if membership discount is better
- [x] Write tests for membership discount auto-apply

## Google Review Link in Follow-Up SMS
- [x] Add Google Maps review link to post-service follow-up SMS template
- [x] Include friendly CTA encouraging customers to leave a review
- [x] Write tests for updated SMS template

## Birthday Discount Automation
- [x] Create birthday discount code generation function
- [x] Build cron job to check for upcoming birthdays daily (runs at 10 AM HST)
- [x] Send birthday discount SMS with unique code (20% off, 30-day expiry)
- [x] Track birthday discount sent status to avoid duplicates
- [x] Write tests for birthday discount automation

## Bug Fixes (March 8)
- [x] Fix tab pill text not vertically centered in CustomerPortal on mobile
- [x] Fix \u2713 raw text showing instead of checkmark icons in membership plans
- [x] Add "Forgot your password?" link to customer sign-in page with SMS reset flow

## Bug Fixes (March 8 - Part 2)
- [x] Fix forgot password flow: add SMS code verification step (store codes in DB, require code before reset)
- [x] Fix mobile keyboard dismissal on auth form (tap outside to dismiss)

## Bug Fixes (March 8 - Part 3)
- [x] Fix admin dashboard tab navigation on mobile — text cut off, not properly scrollable

## Bug Fixes (March 8 - Part 4)
- [x] Fix SMS delivery for password reset — added proper error handling and logging; SMS was working but published version was outdated

## Bug Fixes (March 8 - Part 5)
- [ ] Fix SMS delivery - check Twilio account status, upgrade from trial if needed, verify messages actually deliver

## UI Fixes (March 8 - Part 6)
- [x] Google Reviews link should go to reviews page, not Google Maps
- [x] Remove arrow icon at bottom of Google Reviews card
- [x] Tighten up Google Reviews card layout
- [x] Add spacing between "Become a Member" button and subtext below it
- [x] Add spacing between "Book Military Detail" button and subtext below it

## Membership Flow Redesign (March 8 - Part 7)
- [x] Redesign "Become a Member" button to open an info modal instead of going to booking
- [x] Modal should show all 3 membership tiers with pricing and features
- [x] Modal should clearly explain first detail is required before subscribing
- [x] Modal CTA should guide customer to book their first detail
- [ ] Fix \u2713 raw text showing in customer portal membership plans (will fix on next publish)
- [x] Replace em dash in military service note with cleaner phrasing

## SEO Fixes (March 8 - Part 8)
- [x] Reduce meta keywords from 36 to 7 focused keywords
- [x] Shorten meta description from 173 to 140 characters

## Pricing Bug Fixes (March 8 - Part 9)
- [x] Fix military pricing mismatch: homepage shows $399/$499 but booking shows $249/$299 — aligned to $249/$299
- [x] Consolidate Stripe membership checkout: fixed routers.ts endpoint to match portalRouter.ts ($149/$249/$399)
- [x] Fix AdminMemberships TIER_CONFIG to use correct prices and tier names ($149/$249/$399)
- [x] Reframe homepage membership card to show monthly subscription price instead of per-visit price

## Loyalty Rewards Redesign (March 8 - Part 10)
- [x] Redesign loyalty tier names with Hawaiian/ocean theme: Shore Breaker, Wave Chaser, Reef Master, Kai Legend
- [x] Add escalating, enticing rewards at each tier (free add-ons, ceramic refresh, premium upgrades)
- [x] Add exclusive perks that create status and FOMO (priority scheduling, VIP same-day booking, lifetime VIP)
- [x] Update loyalty tier definitions in server/db.ts with new names, discounts (10/15/20/25%), and reward descriptions
- [x] Update customer portal rewards tab with compelling visual tier progression and birthday callout
- [x] Update admin loyalty dashboard to reflect new tier structure with Hawaiian labels
- [x] Update loyalty reward name formatting in portalRouter.ts
- [x] Run all tests and fix any breakages — 113/113 passing

## UI Tweaks (March 8 - Part 11)
- [x] Split empty bookings text into two lines: 'Ready for your first detail?' and 'Book now and experience the Moku difference.'

## Apple-Level Design Polish (March 8 - Part 12)
- [x] 1. Remove CALL NOW FAB pulse animation — replaced with subtle 4s opacity breathe
- [x] 2. Tighten section spacing on mobile (already responsive, verified)
- [x] 3. Auto-fade hero scroll indicator after 3 seconds
- [x] 4. Clean up Membership Info Modal — increased gap, refined MOST POPULAR badge
- [x] 5. Soften Customer Portal rewards tier card highlight — thinner ring, subtler glow
- [x] 6. Unify button radius — rounded-full CTAs, rounded-2xl cards across all sections
- [x] 7. Reduce font weight variety — font-bold → font-semibold on all section headings and card titles
- [x] 8. Soften neon glow effects — reduced hero text shadows by ~35%
- [x] 9. Gallery hover — removed Eye icon overlay, added brightness increase on hover
- [x] 10. Contact form inputs — increased padding (p-3.5), softer border color
- [x] 11. Footer meta text — unified opacity to 0.30
- [x] 12. Stats section — added tabular-nums for stable count-up animation

## Referral Program (March 8 - Part 13)
- [x] Fix hard line transition between customer portal and hero section — seamless gradient blend
- [x] Fix referral share link to generate proper URL with code embedded (e.g. mokudetail.com/account?ref=CODE)
- [x] Fix text-a-friend to send SMS with proper referral URL
- [x] Display referral code prominently for manual entry at checkout
- [x] Ensure /account registration page reads ?ref= param and pre-fills referral code
- [ ] Design referral system business rules and reward structure
- [ ] Create referral database tables (referrals, referral_rewards)
- [ ] Generate unique referral codes per customer
- [ ] Build server-side referral tracking (link referrer to referred customer)
- [ ] Build referral reward logic (both parties get a discount)
- [ ] Build customer-facing referral tab in CustomerPortal (share link, track referrals)
- [ ] Build admin referral management in dashboard
- [ ] Add referral SMS notifications when a friend books
- [ ] Add referral landing page for referred friends
- [ ] Write tests for referral logic

## Bug Fixes (March 8 - Part 14)
- [x] Fix admin dashboard Team tab mobile layout — Add Employee button overlaps stat cards
- [x] Fix spacing below Book Military Detail button to match Become a Member spacing

## Customer Portal Aesthetic Enhancement (March 8 - Part 15)
- [x] Add high-res background imagery to Customer Portal page matching homepage dark premium aesthetic
- [x] Replace plain text overlay on portal background with Moku logo + homepage-style BEYOND CLEAN text
- [x] Add neon Moku logo + BEYOND CLEAN hero-style treatment to login/register screen
- [x] Add same tiled water droplet background from homepage to customer portal dashboard only (login/register screen left as-is)

## Legal Pages (March 8 - Part 16)
- [x] Create Privacy Policy page at /privacy
- [x] Create Terms & Conditions page at /terms
- [x] Register both routes in App.tsx
- [x] Add Privacy Policy and Terms links to footer

## Referral Program (March 8 - Part 17)
- [x] Create referrals table (referrerId, referredCustomerId, referralCode, status, rewardClaimed)
- [x] Create referral_rewards table (customerId, type: referrer/referred, discountCode, discountPercent, expiresAt, redeemed)
- [x] Generate unique referral codes per customer (e.g., MOKU-DENNIS-A1B2)
- [x] Build server-side referral tracking (link referrer to referred customer on signup)
- [x] Build referral reward logic (referrer gets 15% off, referred friend gets 10% off first booking)
- [x] Build customer-facing Referrals tab in CustomerPortal (share link, track referrals, view rewards)
- [x] Build admin referral management in dashboard (view all referrals, stats)
- [x] Send referral SMS notification to referrer when friend books
- [x] Write tests for referral logic
- [x] Apply referral discount codes at booking checkout

## Employee Portal Branding (March 8 - Part 18)
- [x] Add branded car background + Moku logo + BEYOND CLEAN treatment to employee portal login screen

## Customer Portal Transition Fix (March 9)
- [x] Add glowing blue neon line divider at transition between portal content and hero/branding section

## Referral Link Redirect Fix (March 9)
- [x] Change referral share link URL from /account?ref=CODE to /booking?ref=CODE
- [x] Change text-a-friend SMS URL from /account?ref=CODE to /booking?ref=CODE
- [x] Ensure booking page reads ?ref= param and auto-applies discount code at payment step
- [x] Keep the code persistent through the entire booking flow to checkout

## Referral Code Validation Bug Fix (March 9)
- [x] Fix: referral code does not autofill at payment step when arriving via /booking?ref=CODE
- [x] Fix: manually entering a valid referral code at checkout says "Code invalid"

## Water Droplet Loading Animation (March 9)
- [x] Create a custom water droplet loading animation component
- [x] Replace all "Loading your account" states with the new animation

## Apply Referral Discount to Full Service Price (March 9)
- [x] Store discount percentage and discounted total in booking record
- [x] Calculate discounted service price and remaining balance in booking creation
- [x] Update booking confirmation SMS to show discounted total and remaining balance
- [x] Update admin dashboard to display discount info and correct remaining balance
- [x] Update customer-facing booking confirmation to show discount applied to full price
- [x] Restrict referral code to first-time customers only (check if email/phone has previous bookings)

## Admin PIN Brute Force Protection (March 9)
- [x] Build server-side IP tracking for failed PIN attempts (in-memory store)
- [x] Implement 5-attempt lockout with 15-minute initial cooldown
- [x] Add exponential backoff on repeated lockouts (15min, 30min, 1hr, 2hr)
- [x] Add rate limiting (max 1 PIN attempt per 2 seconds)
- [x] Send SMS alert to owner when lockout threshold is hit (include IP address)
- [x] Permanent block after 20 total failed attempts from same IP
- [x] Update frontend PIN entry UI to show lockout countdown and remaining attempts
- [x] Add admin routes for viewing blocked IPs and unblocking
- [x] Add dedicated lockout screen with countdown timer (amber theme)
- [x] Add permanent block screen with security notice (red theme)
- [x] Add remaining attempts warning indicator on PIN entry
- [x] Write tests for brute force protection logic (17 tests)

## Bug Fixes & Updates (March 9 - Part 2)
- [x] Update business hours from "7 Days a Week" to "Mon-Sat, 8AM-6PM" in Contact section
- [x] Update JSON-LD structured data to reflect Mon-Sat hours (removed Sunday)
- [x] Fix raw checkmark character rendering in admin SMS status badges
- [x] Verify AdminReferrals component exists and imports correctly
- [x] Verify service areas include Mililani, Waianae, Wahiawa, Waikele, Makakilo, Waipahu (already present)
- [x] Verify Instagram handle is @mokudetail (already correct)

## Admin Portal Overhaul (March 9)
- [x] Add admin logout button/functionality
- [x] Add full CRUD controls for bookings (edit, delete with confirmation dialogs)
- [x] Add full CRUD controls for employees (edit, delete with confirmation dialogs)
- [x] Add full CRUD controls for referrals (delete with confirmation dialog)
- [x] Redesign admin portal aesthetic to match customer/employee portal Pacific Current style
- [x] Match glassmorphic cards, gradient backgrounds, and visual language
- [x] Add same header/navigation style as other portals (sticky top bar, pill tabs, Sign Out)
- [x] Server-side routes for deleteBooking, editBooking, deleteEmployee, editEmployee, deleteReferral
- [x] Write tests for admin CRUD operations (15 tests)

## Apple Pay Support (March 9)
- [ ] Enable Apple Pay on Stripe Checkout session for booking deposits

## Admin Customer CRUD (March 9)
- [x] Add server-side DB functions for editing and deleting customers
- [x] Add admin routes for editCustomer and deleteCustomer
- [x] Update AdminCustomers component with edit and delete controls/dialogs
- [x] Write tests for customer CRUD operations (7 new tests, 168 total passing)

## Admin Security Tab & Customer Booking History (March 9)
- [x] Create AdminSecurity component with blocked IPs list, lockout info, and unblock controls
- [x] Add Security tab to admin dashboard navigation
- [x] Add server route to get bookings by customer ID for admin
- [x] Add customer booking history expandable section in AdminCustomers
- [x] Write tests for new features (172 total tests passing)

## Bug Fix: Network Error Photos to Payment (March 9)
- [x] Fix Stripe API version mismatch (was 2025-02-24.acacia, SDK expects 2026-02-25.clover)
- [x] Improve error logging on server (detailed Stripe error type/code/message)
- [x] Improve frontend error handling (show actual error instead of generic network error)

## Bug Fix: Payment Page Issues (March 9)
- [x] Hide Stripe Developers toolbar from payment Elements (developerTools.assistant.enabled: false)
- [x] Add proper client-side validation on Details step (email format, phone length, name/vehicle min 2 chars)
- [x] Format tRPC validation errors into friendly user messages instead of raw JSON

## Booking Confirmation Email & Login on Details (March 9)
- [ ] Research best confirmation email designs (Apple, Airbnb, etc.)
- [ ] Build HTML email template with aloha spirit and premium design
- [ ] Create server-side email sending logic via notification API
- [ ] Trigger email after successful payment/booking creation
- [ ] Add login option on Details step for returning customers
- [ ] Auto-fill customer info from logged-in user profile
- [ ] Prevent duplicate customer entries when user is logged in
- [ ] Write tests for email and login features

## Nav Menu Design Enhancement (March 9)
- [x] Add color to nav menu icons (Home=cyan, Services=indigo, Our Work=amber, About=emerald, Contact=pink)
- [x] Redesign nav menu with enhanced design (mobile + desktop)
- [x] Add active section tracking with IntersectionObserver
- [x] Add glowing underline indicator for active section on desktop
- [x] Redesign mobile dropdown with colored icon badges in rounded squares
- [x] Add active section highlight with chevron indicator in mobile
- [x] Admin link styled with amber/gold accent
- [x] Customer account link styled with emerald accent when logged in

## Resend Email Integration (March 9)
- [x] Set up Resend API key as environment secret
- [x] Install Resend SDK
- [x] Create beautiful HTML email template for booking confirmations (already existed in emailTemplates.ts)
- [x] Build server-side email sending utility (server/resend.ts)
- [x] Integrate email sending into booking creation flow (routers.ts)
- [x] Send confirmation email to customer after successful booking
- [x] Include booking details, service info, date/time, location, pricing in email
- [x] Handle email sending errors gracefully (don't block booking)
- [x] Write tests for email integration (13 new tests, 185 total passing)
- [x] Validate API key works with live test email (ID: 3fc59e15)

## Inline Login During Booking (March 9)
- [x] Add backend endpoint to check if email exists in customer database
- [x] When customer enters existing email on Details step, show login prompt
- [x] After login, auto-fill customer details (name, phone, vehicle) from profile
- [x] Handle case where customer dismisses login and continues as guest

## Stats & Membership Restructure (March 9)
- [x] Change vehicles cleaned stat from 1675+ to 3600+
- [x] Add vehicleSize field to customerMemberships schema
- [x] Add membershipCredits table to schema
- [x] Add membership tier config constants (pricing, credits per tier, SUV surcharge)
- [x] Add DB helpers for credit allocation, usage, and balance checking
- [x] Add credit allocation on subscription creation/renewal in webhook
- [x] Update MembershipInfoModal with new tiers, vehicle size toggle, terms
- [x] Update ServicesSection membership card with new pricing
- [x] Update CustomerPortal membership tab with credits display and vehicle size
- [x] Update portalRouter with vehicleSize in checkout and getMyCredits endpoint
- [x] Update booking flow to use membership credits (skip payment)
- [x] Add checkMembershipCredits endpoint to booking router
- [x] Change Wave Rider from bi-weekly to bi-monthly (2 cleans/month)

## Membership Card Pricing Update (March 10)
- [x] Update Membership Plan card in ServicesSection to show new 3-tier pricing (Island Cruiser $149/$199, Wave Rider $249/$299, Elite $399/$449) — already updated in code

## Member Letter Webpage (March 10)
- [x] Create /letter page component with full member letter content
- [x] Register route in App.tsx
- [x] Style to match website aesthetic (dark theme, Moku branding, animated sections)

## Resend DNS Verification (March 10)
- [ ] Log into Resend and check mokudetail.com DNS verification status
- [ ] Verify all 4 DNS records (DKIM, SPF MX, SPF TXT, DMARC) are properly configured
- [ ] Update email sender from onboarding@resend.dev to noreply@mokudetail.com

## My Cleans Calendar View (March 10)
- [ ] Add backend endpoint to get customer's upcoming cleans and credit history
- [ ] Build calendar view component showing scheduled cleans by month
- [ ] Show credit usage per clean (membership credit vs. paid)
- [ ] Display remaining credits for current month
- [ ] Add "Schedule a Clean" CTA for members with available credits
- [ ] Integrate into customer portal as a new tab

## Letter Page Redesign (March 10)
- [x] Research hawaiihideouts.com for font and design inspiration
- [x] Redesign /letter page with Apple-like aesthetics, clean fonts, elevated design
- [x] Make it truly stunning and WOW-worthy

## Letter Page Design System Audit (March 10)
- [x] Replace Playfair Display + Raleway fonts with main site font stack (Outfit, Manrope, DM Sans, Syne)
- [x] Replace custom inline card styles with card-luxe class and oklch palette
- [x] Update section labels to use var(--font-badge) (Syne) instead of font-raleway
- [x] Update pricing cards to match MembershipInfoModal design patterns
- [x] Replace hardcoded hex backgrounds with oklch palette variables
- [x] Fix em dash on line 681 (A hui hou)
- [x] Ensure all sections are visually cohesive with main website
- [x] Fix em dash in CustomerPortal.tsx reward display

## Admin Calendar & Availability Management
- [x] Create database schema for blocked days and custom time slots
- [x] Build backend tRPC procedures for admin to block/unblock days
- [x] Build backend tRPC procedures for admin to set available time slots per day
- [x] Build admin calendar UI page with day-click to block/unblock
- [x] Build time slot management UI (add/remove slots for specific days or default schedule)
- [x] Integrate blocked days and custom slots into booking flow availability check
- [x] Write vitest tests for availability procedures (17 tests, all passing)
- [x] Add calendar tab to admin dashboard

## Recurring Blocked Days (March 10)
- [x] Add recurringBlockedDays table (dayOfWeek 0-6, reason, isActive)
- [x] Build admin procedures for add/remove/list recurring blocks
- [x] Update getBlockedDaysInRange to include recurring blocks
- [x] Update getAvailableSlots to check recurring blocks
- [x] Add recurring blocks UI section in admin calendar
- [x] Write tests for recurring blocked days (5 tests)

## Max Bookings Per Day Cap (March 10)
- [x] Add calendarSettings table (key-value store for maxBookingsPerDay, etc.)
- [x] Build admin procedures for get/set daily booking cap
- [x] Update getAvailableSlots to check booking count against cap
- [x] Update booking date picker to show "full" status when cap is reached
- [x] Add daily cap setting UI in admin calendar
- [x] Write tests for daily booking cap (3 tests)

## Employee-Specific Scheduling (March 10)
- [x] Add employeeSchedules table (employeeId, dayOfWeek, startTime, endTime, isActive)
- [x] Bookings table already has employeeId column
- [x] Build admin procedures for managing employee schedules
- [x] Build customer-facing preferred detailer selection in booking flow (TimeStep)
- [x] Show available employees for selected date/time
- [x] Pass preferredEmployeeId through to booking creation
- [x] Write tests for employee scheduling (2 tests)

## UI Polish (March 10)
- [x] Redesign "Back to Home" link to be more aesthetic (glassmorphic pill with cyan arrow icon)
- [x] Remove logo scale-up animation on mobile only (show full size immediately with glow)

## Hero Loading Shimmer (March 10)
- [x] Add subtle shimmer placeholder to hero background on mobile while image loads
- [x] FIX: Hero logo still scaling up on mobile - moved isMobile to module-level constant, use plain div instead of motion.div on mobile

## Haptic Feedback & Confetti (March 10)
- [x] Create haptic feedback utility (Vibration API wrapper) - client/src/lib/haptics.ts
- [x] Create confetti utility with Moku brand colors - client/src/lib/confetti.ts
- [x] Add haptic feedback to booking confirmation (confirm button + success)
- [x] Add haptic feedback to membership signup (subscribe button + checkout redirect)
- [x] Add haptic feedback to Book Now CTAs (Hero, Navbar desktop, Navbar mobile)
- [x] Add haptic feedback to Call Now floating button
- [x] Add haptic feedback to payment success
- [x] Add confetti celebration burst to booking confirmed SuccessScreen

## Customer Portal Header Polish (March 10)
- [x] Redesign "Home" back link to glassmorphic pill style (matching other pages) - Customer Portal + Employee Portal
- [x] Redesign "Sign Out" button to aesthetic pill with red icon circle - Customer Portal + Employee Portal

## Booking Service Selection Cleanup (March 10)
- [x] Remove Membership Plan card from booking service selection (memberships managed in Customer Portal)

## Membership System Audit & Improvements (March 10)
- [x] Audit all membership tiers, pricing, and benefits for consistency
- [x] Enforce tier-specific service restrictions (basic members can only book basic detail with credits)
- [x] Make same-day booking a premium-only exclusive perk
- [x] Add exciting UX for premium same-day booking ability
- [x] Ensure membership discount logic is correct per tier
- [x] Streamline membership UX in Customer Portal for clarity
- [x] Update booking flow to show membership perks/restrictions clearly
- [x] Write tests for membership tier restrictions

## Google Review Reward System (March 10)
- [x] Create reviewRewardCodes table in schema (code, customerId, customerEmail, status, createdAt, redeemedAt, bookingId)
- [x] Build backend procedure to generate unique reward code after customer claims review
- [x] Enforce one reward code per customer (server-side)
- [x] Build backend procedure to validate/redeem reward code (tied to specific customer only)
- [x] Integrate reward code validation into booking payment flow (20% off deposit)
- [x] Build review reward UI in Customer Portal (claim flow with Google Review link)
- [x] Add review reward prompt in post-service follow-up or booking confirmation
- [x] Add admin visibility for review reward codes (issued, redeemed, expired)
- [x] Write tests for review reward code generation, validation, and redemption

## Admin Portal UI Fixes (March 10)
- [x] Fix admin header aesthetics — redesign top bar to match site's polished look, fix mobile overlap
- [x] Fix employee list card layout — make name, email, phone all legible and properly spaced
- [x] Fix calendar Sunday "Sun" label overlap — replaced SVG icon with clean dot indicator to prevent text rendering issues on mobile

## Admin Quick-Stats Summary Row (March 10)
- [x] Backend: Create admin.getQuickStats procedure (today's bookings, pending confirmations, revenue)
- [x] Frontend: Build quick-stats summary row in admin header with animated counters
- [x] Style: Match the glassmorphic aesthetic of the rest of the admin portal
- [x] Write tests for the quick-stats procedure

## Bug Fixes (March 10)
- [x] Fix unicode escape \u26a1 showing as raw text in Moku Elite same-day booking badge
- [x] Restrict Stripe checkout to card-only payment methods (remove bank account option)

## Apple Pay / Google Pay (March 10)
- [x] Add Apple Pay and Google Pay to booking deposit PaymentIntent
- [x] Add Apple Pay and Google Pay to membership checkout sessions (portalRouter + routers)

## Payment Method Fix (March 10)
- [x] Fix booking deposit to show card + klarna + link but NOT bank accounts
- [x] Ensure Apple Pay / Google Pay still work (they come through the card payment method type)

## Booking Details Validation (March 10)
- [x] Add strict email validation (must be valid format) on details step
- [x] Add strict phone validation (must be valid US phone number) on details step
- [x] Block "Next" button until both email and phone are valid
- [x] Show inline error messages for invalid entries

## Payment Method Fix (March 10)
- [x] Remove bank option from Stripe deposit PaymentIntent
- [x] Keep card (includes Apple Pay/Google Pay), Klarna, Afterpay/Clearpay, and Link
- [x] Configure PaymentElement to exclude us_bank_account and show BNPL options cleanly
- [x] Verify payment UI renders correctly without bank option

## Affirm BNPL Integration (March 10)
- [x] Add Affirm to payment_method_types in server/stripe.ts
- [x] Add Affirm to PaymentElement ordering in frontend
- [x] Update tests to verify Affirm is included
- [x] Verify all 5 payment methods: card, klarna, afterpay_clearpay, affirm, link

## Stripe Payment Method Messaging Badges (March 10)
- [x] Create reusable BnplBadge component using PaymentMethodMessagingElement
- [x] Add BNPL messaging to ServicesSection service cards (deposit amount)
- [x] Add BNPL messaging to booking flow service selection step
- [x] Style messaging to match dark theme design

## Membership Modal Fixes (March 10)
- [x] Remove em dash from "How it works" text in MembershipInfoModal
- [x] Move "MOST POPULAR" pill to the right of "Wave Rider" title instead of above it

## BNPL Logo Visibility Fix (March 10)
- [x] Fix Affirm logo visibility on dark background (too dark/invisible)
- [x] Fix Afterpay logo display (showing wrong icon)
- [x] Ensure all BNPL logos are properly visible and not cut off on mobile

## Financing Banner (March 10)
- [x] Add a sleek financing banner above the services grid highlighting BNPL options (Affirm, Klarna, Afterpay)

## Option D: BNPL on Full Price + Balance Payment Links (March 10)
- [x] Update BnplBadge on service cards to show installments based on full service price (not $50 deposit)
- [x] Update financing banner text to reference full service price
- [x] Remove BNPL methods (Klarna, Afterpay, Affirm) from $50 deposit PaymentIntent — keep card + Link only
- [x] Build server endpoint to create Stripe Checkout session for remaining balance (full price minus deposit)
- [x] Add balance payment link generation in admin dashboard (per booking, after service completion)
- [x] Send balance payment link via SMS/email to customer after service
- [x] Track balance payment status in bookings table (balancePaid, balancePaymentIntentId)
- [x] Update admin booking view to show balance payment status

## Balance Payment Enhancements (March 10)
- [x] Create customer-facing /payment-success page for balance payments (type=balance)
- [x] Auto-send balance link when admin marks booking as "Completed" (instead of separate button)
- [x] Add email receipt via Resend alongside SMS when sending balance payment link

## Birthday Date Picker UX (March 10)
- [x] Improve birthday date picker to make it easier to select a date (month/year dropdowns or scroll wheels)

## Employee Portal: Complete Service + QR Payment (March 10)
- [x] Add "Complete Service" button to employee portal assigned jobs
- [x] Generate QR code on employee screen linking to customer payment page
- [x] Reuse Stripe Checkout for balance payment (with BNPL options)
- [x] Auto-send SMS + email with payment link when employee marks service complete
- [x] Add 2-hour auto-reminder if balance unpaid
- [x] Add 48-hour follow-up reminder if still unpaid

## Customer My Bookings Page (March 10)
- [x] Add "My Bookings" tab/page to customer portal showing past bookings
- [x] Display booking details: service, date, vehicle, deposit paid, balance status
- [x] Show "Pay Balance" button for unpaid balances linking to Stripe checkout
- [x] Show payment history with timestamps

## Payment History Timeline (March 10)
- [x] Add deposit payment timestamp (depositPaidAt) and balance payment timestamp (balancePaidAt) to bookings schema
- [x] Store Stripe receipt URLs (depositReceiptUrl, balanceReceiptUrl) in bookings table
- [x] Capture receipt URLs from Stripe webhook events (payment_intent.succeeded, checkout.session.completed)
- [x] Build payment timeline component showing deposit and balance payment events with timestamps
- [x] Add Stripe receipt links ("View Receipt") to each payment event in the timeline
- [x] Display timeline in customer portal bookings tab under each booking

## Before/After Photo Gallery (March 10)
- [x] Create customer-facing tRPC procedure to fetch job photos by booking ID
- [x] Build photo gallery component with before/after tabs and lightbox view
- [x] Add photo gallery to customer portal bookings tab for completed bookings
- [x] Ensure photos are only visible for bookings that belong to the logged-in customer

## Browser Push Notifications (March 10)
- [x] Set up web push notification infrastructure (VAPID keys, service worker)
- [x] Create push subscription tRPC procedures (subscribe, unsubscribe)
- [x] Add push_subscriptions table to database schema
- [x] Build notification opt-in UI in customer portal
- [x] Send push notification when employee marks service complete
- [x] Send push notification when balance payment is received
- [x] Handle notification click to navigate to customer portal

## Bug Fixes & Updates (March 11, 2026)
- [x] Update Military/PCS/Inspection Detail pricing: $399 sedans, $499 SUVs
- [x] Add financing option (Affirm/Klarna/Afterpay) to Military/PCS packages
- [x] Fix admin portal 404 error — resolved: user was going to wrong URL. Correct: /admin/bookings
- [x] Verify employee portal login is accessible and working — confirmed at /team
- [x] Fix missing "Moku" name/unit on desktop hero section — removed mix-blend-mode:screen that made logo invisible, reduced top fade overlay opacity
- [x] Include booking photos and vehicle condition notes in email notifications
- [x] Improve booking confirmation email to show full summary (not just package purchase)
- [x] Add "Need a Quote?" button/feature with photo upload for custom quote requests
- [x] Create /quote page with photo upload, condition tags, and description form
- [x] Add quote request tRPC procedures (submit, uploadPhoto, admin list/detail)
- [x] Add quoteRequests and quotePhotos tables to database
- [x] Add "Get a Quote" CTA to homepage contact section
- [x] Send owner notification on new quote submission

## Quote Page Visibility & Aesthetics (March 11, 2026)
- [x] Add prominent "Need a Quote?" CTA below the Book Your Detail section on homepage (added to hero buttons)
- [x] Add "Need a Quote?" CTA above the packages on the services page (banner with icon)
- [x] Audit and improve quote page aesthetics to match site's futuristic design (full redesign with card-luxe)
- [x] Ensure CTAs flow naturally with surrounding sections

## Admin Quote Inbox (March 11, 2026)
- [x] Add "Quotes" tab to admin dashboard sidebar navigation
- [x] Build quote list view with status filters (pending/quoted/accepted/declined)
- [x] Build quote detail view showing customer info, photos, condition tags, and notes
- [x] Add ability to respond to quotes with a custom message and price
- [ ] Add ability to convert quote into a booking (future enhancement)
- [x] Send SMS notification to customer when quote is responded to

## SEO Performance Optimization (March 11, 2026)
- [x] Compress hero and gallery images to WebP format (24.6MB → 2.4MB, 90% reduction)
- [x] Re-upload optimized images to CDN and update all references (17 images converted)
- [x] Lazy-load Stripe.js (BnplBadge now uses React.lazy + Suspense)
- [x] Add CDN preconnect header for faster image loading
- [x] Optimize LCP (Largest Contentful Paint) by preloading hero image in HTML head
- [x] Below-fold images already have loading="lazy" attribute

## Location Landing Pages (March 11, 2026)
- [x] Create location page template component with SEO-optimized structure (LocationPage.tsx)
- [x] Build 10 location pages: Mililani, Honolulu, Kapolei, Kailua, Kaneohe, Pearl City, Ewa Beach, Waipahu, Hawaii Kai, Aiea
- [x] Add unique content per location (driving distance, local landmarks, neighborhoods, population)
- [x] Add JSON-LD LocalBusiness structured data per location page
- [x] Add location pages to sitemap.xml and internal linking
- [x] Add "Areas We Serve" section to footer with links to all 10 location pages

## Dead Space / Padding Tighten (March 11, 2026)
- [x] Reduce excessive vertical padding/margins between homepage sections (especially above FAQ)
- [x] Audit all section spacing for consistent, tighter layout — reduced md:py-32 to md:py-20 across all sections

## Quote Page Fixes (March 11, 2026)
- [x] Add aesthetic back button at top left of quote page
- [x] Fix footer navigation links (Home, Services, etc.) not clickable on quote page

## UX Improvements (March 11, 2026)
- [x] Add aesthetic back button at top left of booking page (enhanced existing header with visible BACK label)
- [x] Implement smooth scroll on arrival when navigating from footer hash links on sub-pages
- [x] Add breadcrumb navigation to location landing pages (Home > Detailing > Location) with BreadcrumbList JSON-LD

## Email Fallback for SMS (March 11, 2026) — Temporary until 10DLC approved
- [x] Add email fallback logic to sendSms function in twilio.ts (auto-sends branded email when SMS fails)
- [x] Create SMS-to-email template for fallback notifications (smsFallbackEmail.ts)
- [x] Wire up fallback email for all critical SMS call sites (routers, cron, portalRouter, adminSecurity)
- [x] Update all test mocks to include registerEmailForPhone (all 336 tests passing)
- [x] SMS still attempts first, falls back to email on Twilio error (30034 or any failure)

## Email & SMS Improvements (March 11, 2026)
- [x] Resend domain mokudetail.com fully verified (DKIM, SPF, DMARC all verified)
- [x] Updated email sender from onboarding@resend.dev to noreply@mokudetail.com
- [x] Tested email delivery to both owner and non-owner emails — confirmed working
- [x] Add admin notification banner for 10DLC pending status in admin dashboard
- [x] Fixed email fallback: switched to dual-delivery mode (sends BOTH SMS + email while 10DLC pending)
- [x] Root cause: Twilio accepts messages (HTTP 201/queued) but fails delivery later with 30034, so old fallback never triggered

## Customer Portal Profile Improvements (March 11, 2026)
- [x] Auto-format phone numbers to (808) 277-1319 format in profile display
- [x] Format birthday from 1991-09-19 to friendlier format (September 19, 1991)
- [x] Upgraded Personal Info section aesthetics (premium gradient card, refined icon containers, divider lines, hover effects, improved typography)

## Contact Database & Welcome Email Campaign
- [x] Create contacts table schema (name, email, phone, region, contactType, source, labels)
- [x] Build CSV import procedure for admin
- [x] Import all 664 contacts from Moku_FINAL_Contacts.csv into database (34 spam filtered)
- [x] Build admin contacts management page (view, search, filter contacts)
- [x] Design stunning HTML welcome/launch email template
- [x] Build email campaign send system via Resend (batch send to all contacts with email)
- [x] Add unsubscribe link and CAN-SPAM compliance to emails
- [x] Test email delivery to verify formatting and deliverability
- [x] Add campaign tracking (sent count, delivery status) in admin
- [x] Add /api/email-preview route to preview welcome email in browser
- [x] Fix: Email preview link not loading on production domain (needed publish + ES module import fix)
- [x] Fix: Admin contacts page (/admin/contacts) not showing content (needed publish to go live)
- [x] Remove all em dashes from welcome email template
- [x] Fix name formatting in email greeting: name followed by comma, no extra symbols
- [x] Update welcome email fonts to match mokudetail.com/letter page typography
- [x] Fix duplicate names in contacts DB (Chanell Chanell -> Chanell, Michael Michael -> Michael, Avis Budget -> Tanya Ugale)
- [x] Add "Send Test Email" button to admin contacts page (sends to admin's own email)
- [x] Review and clean up Avis Budget contact name (renamed to Tanya Ugale from email)
- [x] Replace Orbitron counter font with Playfair Display italic (classic/sexy serif inspired by hawaiihideout.com)
- [x] Add Playfair Display italic to site stat counters and hero numbers for email/site visual consistency
- [x] Make "mokudetail.com" a clickable link in welcome email template and MemberLetter page
- [x] Fix: /admin/contacts now has its own PIN gate (uses same sessionStorage key as bookings)
- [x] Complete redesign of admin contacts dashboard: employee portal aesthetic + most intuitive CRM interface
- [x] Investigate and fix email going to spam - added List-Unsubscribe headers, plain text version, personal from name, simplified subject line
- [x] Add safeguards to campaign send: 3-step confirmation (batch config, type-to-confirm, final launch), batch scheduling
- [x] Fix: Change email from name from "Kainoa" to "Dennis from Moku Detailing"
- [x] Investigate: Email still going to junk/spam - DNS is verified, root cause is new domain reputation (1 day old)
- [x] Add batch scheduling to campaign (10/25/50 batch sizes with batch number selection)
- [x] Simplify email HTML to reduce spam score triggers (cleaner template, fewer links, more personal)
- [x] Revert counter font from Playfair Display back to Orbitron (user preferred the original)
- [x] Generate unique graphics/icons for each membership tier (Island Cruiser, Wave Rider, Moku Elite)
- [x] Integrate tier graphics into MemberLetter page membership cards
- [x] Add tier graphics to homepage membership section and customer portal
- [x] Add tier badge graphics to MembershipInfoModal (View Plans popup)
- [x] Add tier badge graphics to AdminMemberships dashboard (stats cards + table rows)
- [x] Add tier badge graphics to Booking page membership indicator pill
- [x] Create shared TIER_BADGES constant in shared/const.ts for consistent badge URLs across all components
- [x] Regenerate tier badge images with transparent backgrounds (remove white squares)
- [x] Make badges significantly larger across ALL components so text on badges is readable
- [x] Reposition badges in MembershipInfoModal: larger size, right side of tier text
- [x] Remove white backgrounds from badges across all components (ServicesSection, MemberLetter, CustomerPortal, AdminMemberships, Booking)
- [x] Add animated badge entrance (scale-up + shimmer) to MembershipInfoModal when it opens
- [x] Create dedicated /membership landing page with side-by-side comparison table using badges as column headers
- [x] Register /membership route in App.tsx and add navigation links
- [x] Add tier badge images to membership welcome and booking confirmation emails
- [x] Create generateMembershipWelcomeEmail template with large tier badge
- [x] Wire membership welcome email into Stripe webhook on subscription activation
- [x] Add membershipTier to booking confirmation email (shows badge if customer is a member)
- [x] Write vitest tests for email badge templates (10 tests passing)
- [x] Fix /membership page navbar not working (navigation links broken)
- [x] Add back button to /membership page to return to homepage
- [x] Add link(s) to /membership page from homepage (navbar, services section, footer)
- [x] Make all 3 membership tier cards same large size (like the middle Wave Rider card)
- [x] Add hover glow effect in respective tier colors (cyan for Island Cruiser, purple for Wave Rider, gold for Moku Elite)
- [x] Add feature bullet points (3-4 key benefits) to each tier card on /membership page
- [x] Add staggered scroll-triggered entrance animation so tier cards fly in one at a time
- [x] Build membership upgrade/downgrade backend with Stripe proration (tRPC procedures)
- [x] Build upgrade/downgrade UI in customer portal (tier switcher with prorated billing preview)
- [x] Update 5.0 rating font in Google Reviews section to Inter (cleaner, tabular numerals)
- [x] Remove Google reviewer entries from contacts list that have no other contact info (no email, phone, etc.) — removed 72 name-only entries, kept 8 with email/phone

## Legal Protection & IP Documents
- [x] Draft Web Development Services Agreement (WOW Creates, LLC ↔ Moku Detailing, LLC)
- [x] Draft Software License Agreement (code ownership + licensing terms)
- [x] Draft mutual NDA between WOW Creates, LLC and Moku Detailing, LLC
- [x] Create Hawaii LLC formation step-by-step checklist for WOW Creates, LLC
- [x] Draft Employee NDA template for Moku Detailing employees
- [x] Update Terms & Conditions page with IP ownership clauses and DMCA reference
- [x] Add DMCA Policy page to website (/dmca)
- [x] Update copyright notice in footer (© WOW Creates, LLC / Licensed to Moku Detailing, LLC)

## UI Cleanup
- [x] Remove floating back button from /membership page (redundant with navbar)
- [x] Change both 5.0 rating fonts (GoogleReviewsBanner + TestimonialsSection) to Manrope (--font-heading) for cleaner look

## Customer Portal Visual Redesign
- [x] Add colored gradient icons with glow effects to profile fields (name=blue, email=cyan, phone=green, vehicle=purple, birthday=pink)
- [x] Add smooth entrance animations (staggered fade-in-up) to all portal sections
- [x] Enhance tab navigation with unique colors, glow pulse, and icon drop-shadows
- [x] Add micro-interactions: field row hover, booking card lift, icon scale on hover
- [x] Add gradient icons for rewards (trophy=gold), referrals (share=emerald), membership (crown=purple), notifications (bell=orange)
- [x] Match field label colors to their respective icon gradients
- [x] Mobile performance optimizations (reduced animation duration, disabled hover effects)
- [x] Accessibility: respect prefers-reduced-motion

## Customer Portal Membership Tab Glow
- [x] Apply premium glow/gradient treatment from Membership page to Customer Portal membership tab options
- [x] Add tier-specific hover glow (blue/purple/gold) to plan cards
- [x] Add badge glow rings with radial gradient halos
- [x] Add staggered entrance animations to tier cards
- [x] Add glow CTA buttons with box-shadow
- [x] Add Orbitron stat font to price numbers
- [x] Add Syne badge font to credit badges and CTA buttons
- [x] Apply same treatment to tier change cards (active membership view)
- [x] Add animated crown icon with glow to membership header

## UI Cleanup Round 2
- [x] Fix 5.0 font to use DM Sans (clean body font) in GoogleReviewsBanner and TestimonialsSection
- [x] Clean up MOST POPULAR bubble in Customer Portal membership tab (smaller, cleaner, less chunky)
- [x] Fix phone number font during booking to use clean body font
- [x] Fix admin portal tab overflow on desktop - make all tabs visible or clearly scrollable (flex-wrap)
- [x] Align Subscribe Now buttons to same vertical position in Customer Portal membership cards (flex-col + flex-1)
- [x] Fix: Customer-uploaded booking photos cannot be viewed in admin portal (admin now shows both vehicle photos + job photos)
- [x] Fix condition tag labels: convert snake_case to readable labels (hard_water → Hard Water, oxidation → Oxidation)
- [x] Overhaul admin booking detail expanded view: improve aesthetics, layout, spacing, and intuitive UX (sectioned layout with Contact, Payment, Conditions, Communications, Actions + lightbox for photos)
- [x] Fix: Admin portal photo clicks use in-page lightbox instead of opening new tabs (already implemented with overlay)
- [x] Fix: Admin portal action buttons clumped on left - reorganized into grid rows (status actions + manage/contact)
- [x] Fix: Admin portal nav tabs - switched to responsive grid (3 cols mobile, 4 sm, 6 md, 11 lg)
- [x] Fix: Customer Portal My Account icon backgrounds - rounded corners (rounded-2xl) and softer diffused glow
- [x] Create beautiful Open Graph preview images for each page (homepage, services, booking, membership, about, contact, letter, quote)
- [x] Implement per-page OG meta tags via server-side injection so each link preview is unique and aesthetic

## OG Meta Tag Fixes (Round 2)
- [x] Update og:title format to "Moku Detailing | [Page Name]" (e.g., "Moku Detailing | A Letter to Our Ohana", "Moku Detailing | Membership Plans")
- [x] Fix inconsistent link previews — use original CDN URLs with correct image/png content-type, added og:image:type meta tag
- [x] Ensure og:image dimensions declared as 1200x630 in meta tags with og:image:type
- [x] Add canonical URL tags for each page
- [x] Verify production build also injects OG meta correctly (both setupVite and serveStatic paths)

## Em Dash Removal - Full Codebase Sweep (March 24)
- [x] Remove all em dashes from user-facing text across the entire codebase (client + server)

## DMCA Page Update (March 24)
- [x] Update DMCA page email to will@wowcreates.com

## New Features Build (March 24)

### Feature 1: Job Timeline / Activity Feed
- [x] Add activityLog table to schema (bookingId, eventType, description, actorType, actorId, timestamp)
- [x] Add db helper functions for creating and querying activity logs
- [x] Hook activity logging into existing status changes, photo uploads, checklist completions, payments
- [x] Add admin activity timeline UI in booking detail view
- [x] Add customer-facing simplified timeline in portal booking detail
- [x] Add tRPC procedures for activity log queries

### Feature 2: Customer Satisfaction Score + Post-Job Rating
- [x] Add jobRatings table to schema (bookingId, rating, feedback, createdAt, ratingToken)
- [x] Add tRPC procedures for submitting and querying ratings
- [x] Build public rating page (no login required, token-based)
- [x] Route 4-5 stars to Google review prompt, 1-3 stars to private feedback form
- [x] Auto-send rating request SMS after job completion
- [x] Add CSAT metrics to admin dashboard quick stats
- [x] Add admin ratings overview tab/section

### Feature 3: Post-Job Digital Report Card
- [x] Build report card data aggregation (service info, checklist, before/after photos, employee, time)
- [x] Build beautiful email template for report card
- [x] Build public report card page (shareable link)
- [x] Auto-send report card email after job completion
- [x] Add "Share" button for social media sharing
- [x] Add report card link in customer portal booking history

### Feature 4: On My Way Live ETA Tracking
- [x] Add locationSharing table to schema (bookingId, employeeId, lat, lng, eta, updatedAt, active)
- [x] Add employee "Start Route" button in employee portal
- [x] Build location update tRPC procedure (employee pushes location)
- [x] Build public tracking page with Google Maps showing live ETA
- [x] Auto-send tracking link SMS to customer when employee starts route
- [x] Auto-stop tracking when employee arrives / marks job started

## Feature Enhancements (March 24)
- [x] Add CSAT dashboard tab in admin (aggregate ratings, average score, flagged low ratings)
- [x] Add report card link to customer portal booking history
- [x] Wire rating SMS into post-completion cron with 2-hour delay instead of immediate

## SMS Compliance for Twilio A2P 10DLC Campaign Approval (March 28)
- [x] Add SMS consent checkbox to booking form with compliant language + store consent in DB
- [x] Create dedicated SMS Terms / Text Message Policy page
- [x] Update Privacy Policy with SMS consent language
- [x] Add STOP opt-out handling to Twilio SMS flow (incoming webhook)

## Disable Booking Reminders
- [x] Disable booking reminder SMS sending logic

## Site Takedown
- [x] Replace entire site with professional takedown page (non-payment by client)
