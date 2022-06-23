<template>
  <div class="mixin-components-container">
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>创建HTTP服务</span>
        </div>
        <div style="margin-bottom:50px;">
          <el-form ref="form" :model="form" label-width="140px">
            <el-form-item label="服务名称">
              <el-input v-model="form.service_name" placeholder="6-128字母数字下划线" />
            </el-form-item>
            <el-form-item label="服务描述">
              <el-input v-model="form.service_desc" placeholder="最多255字符必填" />
            </el-form-item>
            <el-form-item label="接入类型">
              <el-input v-model="form.rule" placeholder="路径格式: /user/,域名格式: www.test.com" class="input-with-select">
                <el-select slot="prepend" v-model="form.rule_type" placeholder="请选择" style="width: 80px">
                  <el-option label="路径" :value="0" />
                  <el-option label="域名" :value="1" />
                </el-select>
                <el-button slot="append" icon="el-icon-search" />
              </el-input>
            </el-form-item>
            <el-form-item label="支持Https">
              <el-switch
                v-model="form.need_https"
              />
              &ensp;&ensp;&ensp;&ensp;
              <span style="color: #606266;font-weight: 700;">&ensp;&ensp;&ensp;&ensp;支持Strip_uri&nbsp; &ensp;&ensp;&ensp;&ensp;</span>
              <el-switch
                v-model="form.need_strip_uri"
              />
              <span style="color: #606266;font-weight: 700;">&ensp;&ensp;&ensp;&ensp;支持websocket&ensp;&ensp;&ensp;&ensp;</span>
                &ensp;&ensp;&ensp;&ensp;
              <el-switch
                v-model="form.need_websocket"
              />
            </el-form-item>
            <el-form-item label="URL重写">
              <el-input v-model="form.url_rewrite" type="textarea" autosize placeholder="格式: ^/gateway/test_service(.*) $1 多条换行" />
            </el-form-item>
            <el-form-item label="Hearder头转换">
              <el-input v-model="form.header_transfor" type="textarea" autosize placeholder="格式: add HeaderName HeaderValue Header转换支持 add(增加)/del(删除)/edit(修改) " />
            </el-form-item>
            <el-form-item label="开启验证">
              <el-switch
                v-model="form.open_auth"
              />
            </el-form-item>
            <el-form-item label="IP白名单">
              <el-input v-model="form.white_list" type="textarea" autosize placeholder="格式: 127.0.0.1 多条换行 白名单优先于黑名单" />
            </el-form-item>
            <el-form-item label="IP黑名单">
              <el-input v-model="form.black_list" type="textarea" autosize placeholder="格式: 127.0.0.1 多条换行 白名单优先于黑名单" />
            </el-form-item>
            <el-form-item label="客户端限流">
              <el-input v-model="form.clientip_flow_limit" placeholder="0表示无限制" />
            </el-form-item>
            <el-form-item label="服务端限流">
              <el-input v-model="form.service_flow_limit" placeholder="0表示无限制" />
            </el-form-item>
            <el-form-item label="轮询方式">
              <el-radio-group v-model="form.round_type">
                <el-radio :label="0">random</el-radio>
                <el-radio :label="1">rand-robin</el-radio>
                <el-radio :label="2">weight_rand-robin</el-radio>
                <el-radio :label="0">ip_hash</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="IP列表">
              <el-input v-model="form.ip_list" type="textarea" autosize placeholder="格式: 127.0.0.1:80 多条换行" />
            </el-form-item>
            <el-form-item label="权重列表">
              <el-input v-model="form.weight_list" type="textarea" autosize placeholder="格式: 127.0.0.1:80 50 多条换行" />
            </el-form-item>
            <el-form-item label="建立连接超时">
              <el-input v-model="form.upstream_connect_timeout" placeholder="单位s,0表示无限制" />
            </el-form-item>
            <el-form-item label="获取Header超时">
              <el-input v-model="form.upstream_header_timeout" placeholder="单位s,0表示无限制" />
            </el-form-item>
            <el-form-item label="链接最大空闲时间">
              <el-input v-model="form.upstream_idle_timeout" placeholder="单位s,0表示无限制" />
            </el-form-item>
            <el-form-item label="最大空闲连接数">
              <el-input v-model="form.upstream_max_idle" placeholder="单位s,0表示无限制" />
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import waves from '@/directive/waves/index.js' // 水波纹指令
export default {
  name: 'ComponentMixinDemo',
  directives: {
    waves
  },
  data() {
    return {
      form: {
        service_name: '',
        service_desc: '',
        rule_type: 0,
        rule: '',
        need_https: false,
        need_strip_uri: true,
        need_websocket: false,
        url_rewrite: '',
        header_transfor: '',
        round_type: undefined,
        ip_list: '',
        weight_list: '',
        upstream_connect_timeout: undefined,
        upstream_header_timeout: undefined,
        upstream_idle_timeout: undefined,
        upstream_max_idle: undefined,
        open_auth: false,
        white_list: '',
        black_list: '',
        clientip_flow_limit: undefined,
        service_flow_limit: undefined
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>
.mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
.component-item{
  min-height: 100px;
}
</style>
