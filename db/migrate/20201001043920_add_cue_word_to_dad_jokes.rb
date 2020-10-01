class AddCueWordToDadJokes < ActiveRecord::Migration[6.0]
  def change
    add_column :dad_jokes, :cue_word, :string
    add_index :dad_jokes, [:cue_word, :joke], unique: true
  end
end
