import os
from dotenv import load_dotenv

load_dotenv()

ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# .env.local ファイルを読み込む
load_dotenv('.env.local')

# 環境変数を取得
ENV = os.getenv('ENV', 'production')

# 環境に応じてホームディレクトリを設定
# if ENV == 'production':
#     HOME_DIR = "/tmp"
# else:
#     HOME_DIR = os.path.expanduser("~")

HOME_DIR = os.path.expanduser("~")
# その他の設定
BABEL_GENERATED_DIR = os.path.join(HOME_DIR, "babel_generated")
API_PORT = 8000
WEBSOCKET_PORT = 8001

def get_file_path(project_id: str, filename: str, upload_dir: str = "") -> str:
    """
    project_idに基づいてファイルパスを決定し、ファイルの存在を確認する関数
    """
    if project_id == "babel":
        file_path = os.path.join('..', filename)
    else:
        file_path = os.path.join(BABEL_GENERATED_DIR, project_id, filename)
    
    if not os.path.exists(os.path.dirname(file_path)):
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
    
    return file_path

# 監視対象ディレクトリのリスト
WATCHED_DIRS = [BABEL_GENERATED_DIR]