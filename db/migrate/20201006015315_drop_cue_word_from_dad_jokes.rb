class DropCueWordFromDadJokes < ActiveRecord::Migration[6.0]
  def change
    remove_index :dad_jokes, [:cue_word, :joke]
    remove_column :dad_jokes, :cue_word, :string
  end
end
