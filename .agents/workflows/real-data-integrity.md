---
description: Use when building dashboards, analytics, statistics, charts, KPIs, lists, reports, or any interface displaying business data. Prevents fake, mocked, hardcoded, or unverifiable production data.
---


Treat data integrity as a hard requirement.

NEVER present invented data as real.

In production, do not use:
- mock users
- fake revenue
- fake orders
- fake subscriptions
- fake analytics
- fake statistics
- fake transactions
- hardcoded business metrics
- placeholder records presented as real

Every displayed value must have a traceable source:
database query, API response, documented calculation, or explicit user input.

Before displaying a metric:
1. Identify its source.
2. Verify the query/filter.
3. Verify the calculation.
4. Verify tenant/user scope.
5. Handle loading, empty, error, and stale states.

If there is no data:
- show a professional empty state;
- do not manufacture numbers to make the interface look populated.

Empty states must explain:
- what is missing;
- why the area is empty when useful;
- what action the user can take next.

Development/demo data may exist only when the environment explicitly supports it and it must be clearly identified as demo/test data.

Never expose test accounts, development projects, fake history, fake transactions, or development values to production users.

For charts:
- derive values from the real dataset;
- label units and time periods;
- avoid misleading scales;
- do not display a chart if there is insufficient real data unless the empty/insufficient-data state is explicit.

If the source cannot be verified, say so instead of guessing.