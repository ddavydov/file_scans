class LogsController < ApplicationController
  def index

  end
  def show
    log_files = { syslog: 'syslog', apache: 'access.log', db: 'db.log' }

    path = Rails.root.to_s + '/tmp/logs/'
    json = []
    log_files.each {|key, file|
      file_lines_count = %x{wc -l #{path + file}}.split.first.to_i
      file_lines_count_old = params[key.to_sym] || 0
      data =  %x{tail -n #{file_lines_count - file_lines_count_old.to_i} #{path + file}}
      json << {name: key, count: file_lines_count, data: data}
    }
    render :json => json
  end
end
