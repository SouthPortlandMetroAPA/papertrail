/* ════════════════════════════════════════════════════════════════════════
   PaperTrail — single global version constant.
   Workflow on every deploy:
     1. Edit window.APP_VERSION here.
     2. UPDATE apa_core.apps SET version=$NEW WHERE app_name=<env-row>.
        - Preprod row: app_name='PaperTrail-preprod' (see IS_PREPROD in
          index.html — pages under /preprod/ poll the -preprod row, prod
          pages poll the plain row, so the two envs are isolated).
        - Prod row:    app_name='PaperTrail'. promote.sh syncs it.
     3. git push.
   ════════════════════════════════════════════════════════════════════════ */
window.APP_VERSION = '2.11';
