-- releases テーブルの作成
CREATE TABLE releases (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    company_name TEXT NOT NULL,
    category_name TEXT NOT NULL,
    image_url TEXT NOT NULL,
    url TEXT NOT NULL,
    created_at TEXT NOT NULL
);

-- keywords テーブルの作成
CREATE TABLE keywords (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE
);

-- keyword_map テーブルの作成
CREATE TABLE keyword_map (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    release_id UUID REFERENCES releases(id) ON DELETE CASCADE,
    keyword_id UUID REFERENCES keywords(id) ON DELETE CASCADE,
    UNIQUE(release_id, keyword_id)
);

-- インデックスの作成（オプション）
CREATE INDEX idx_releases_title ON releases(title);
CREATE INDEX idx_releases_company_name ON releases(company_name);
CREATE INDEX idx_releases_category_name ON releases(category_name);
CREATE INDEX idx_keywords_name ON keywords(name);
CREATE INDEX idx_keyword_map_release_id ON keyword_map(release_id);
CREATE INDEX idx_keyword_map_keyword_id ON keyword_map(keyword_id);