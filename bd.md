# Dados para o banco de dados

    bd_tasks

    users
    - id -> uint auto PK
    - username -> varchar(50) NULL
    - passwrd -> varchar(100) NULL
    - created_at -> datetime NULL
    - updated_at -> datetime NULL

    tasks
    - id -> uint auto PK
    - id_user -> uint FK
    - task_text -> varchar(100) NULL
    - task_status -> varchar(30) NULL -> (new | in progress | canceled | done)
    - created_at
    - updated_at
