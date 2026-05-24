/* ════════════════════════════════════════════════════════════════════════
   PaperTrail — single global version constant.
   Workflow on every deploy:
     1. Edit window.APP_VERSION here.
     2. UPDATE apa_core.apps SET version=$NEW WHERE app_name='PaperTrail'.
     3. git push.
   ════════════════════════════════════════════════════════════════════════ */
window.APP_VERSION = '2.2';
